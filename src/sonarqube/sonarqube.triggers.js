import {scmServices} from "../scm/scm.service";
import {sonarqubeService} from "./sonarqube.service";
import {giteaService} from "../gitea/gitea.service";
import {GLOBALS} from "../globals";

export const createSonarqubeReport = async (req) => {
    console.log('Creating Sonarqube report...')
    const repository = req.body.pull_request.base.repo;
    const pullRequestId = req.body.pull_request.number;

    // add status to commit
    await giteaService.addStatusToCommit({
        repository,
        sha: req.body.pull_request.head.sha,
        state: 'pending',
        description: 'Sonarqube report is being created...',
        context: 'Sonarqube'
    })

    await sonarqubeService.createProject(req)
    await scmServices.cloneRepo(repository, req.body.pull_request.base.ref)
    await scmServices.checkoutBranch(repository, req.body.pull_request.base.ref)
    await scmServices.pullBranch(repository, req.body.pull_request.base.ref)
    sonarqubeService.runAnalysis(repository, pullRequestId, req.body.pull_request.base.sha.substring(0, 7))

    await scmServices.fetchRepo(repository, req.body.pull_request.head.ref)
    await scmServices.checkoutBranch(repository, req.body.pull_request.head.ref)
    await scmServices.pullBranch(repository, req.body.pull_request.head.ref)
    sonarqubeService.runAnalysis(repository, pullRequestId, req.body.pull_request.head.sha.substring(0, 7))

    const projectKey = `${repository.full_name}-${pullRequestId}`.replace('/', '_')

    const report = await sonarqubeService.generateReportSummary(repository, pullRequestId)

    // add status to commit
    await giteaService.addStatusToCommit({
        repository,
        sha: req.body.pull_request.head.sha,
        state: report.status,
        description: `Sonarqube report is created!`,
        context: 'Sonarqube',
        target_url: `${GLOBALS.SONARQUBE_URL}/dashboard?id=${projectKey}`
    })

    await giteaService.addCommentToIssue({
        repository,
        index: pullRequestId,
        comment: report.comment
    })

}