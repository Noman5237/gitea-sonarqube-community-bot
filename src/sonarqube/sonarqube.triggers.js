import {scmServices} from "../scm/scm.service";
import {sonarqubeService} from "./sonarqube.service";
import {giteaService} from "../gitea/gitea.service";
import {GLOBALS} from "../globals";
import {log} from '../util/logger';

export const createSonarqubeReport = async (req) => {
    const repository = req.body.pull_request.base.repo;
    const pullRequestId = req.body.pull_request.number;
    const projectKey = `${repository.full_name}-${pullRequestId}`.replace('/', '_')
    log(req.traceId, `Creating Sonarqube report ${projectKey}`)

    try {
        // add status to commit
        await giteaService.addStatusToCommit(req.traceId, {
            repository,
            sha: req.body.pull_request.head.sha,
            state: 'pending',
            description: `Sonarqube report is being created, trace: ${req.traceId}`,
            context: 'Sonarqube'
        })

        await sonarqubeService.createProject(req)
        await scmServices.cloneRepo(req.traceId, repository, req.body.pull_request.base.ref)
        await scmServices.checkoutBranch(req.traceId, repository, req.body.pull_request.base.ref)
        await scmServices.pullBranch(req.traceId, repository, req.body.pull_request.base.ref)
        await sonarqubeService.runAnalysis(req.traceId, repository, pullRequestId, req.body.pull_request.base.sha.substring(0, 7))

        await scmServices.fetchRepo(req.traceId, repository, req.body.pull_request.head.ref)
        await scmServices.checkoutBranch(req.traceId, repository, req.body.pull_request.head.ref)
        await scmServices.pullBranch(req.traceId, repository, req.body.pull_request.head.ref)
        await sonarqubeService.runAnalysis(req.traceId, repository, pullRequestId, req.body.pull_request.head.sha.substring(0, 7))

        const report = await sonarqubeService.generateReportSummary(req.traceId, repository, pullRequestId)

        // add status to commit
        await giteaService.addStatusToCommit(req.traceId, {
            repository,
            sha: req.body.pull_request.head.sha,
            state: report.status,
            description: `Sonarqube report is created! trace: ${req.traceId}`,
            context: 'Sonarqube',
            target_url: `${GLOBALS.SONARQUBE_URL}/dashboard?id=${projectKey}`
        })

        await giteaService.addCommentToIssue(req.traceId, {
            repository,
            index: pullRequestId,
            comment: report.comment
        })
    } catch (e) {
        log(req.traceId, e.message);
        // add status to commit
        await giteaService.addStatusToCommit(req.traceId, {
            repository,
            sha: req.body.pull_request.head.sha,
            state: 'failure',
            description: `Internal Service Exception! trace: ${req.traceId}`,
            context: 'Sonarqube',
            target_url: `${GLOBALS.SONARQUBE_URL}/dashboard?id=${projectKey}`
        })
        throw 'failed to create sonarqube report'
    }
}

export const deleteSonarqubeProject = async (req) => {
    const repository = req.body.repository;
    const pullRequestId = req.body.pull_request.number;
    const projectKey = `${repository.full_name}-${pullRequestId}`.replace('/', '_')
    log(req.traceId, `deleting sonarqube project ${projectKey}`)
    await sonarqubeService.deleteProject(req.traceId, projectKey)
}