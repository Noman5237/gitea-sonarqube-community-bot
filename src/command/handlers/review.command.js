import {createSonarqubeReport} from "../../sonarqube/sonarqube.triggers";
import {giteaService} from "../../gitea/gitea.service";
import {log} from '../../util/logger';

export const review = async (req) => {
    const repository = req.body.repository;
    const pullRequestId = req.body.issue.number;

    log(req.traceId, `creating review of repo: ${repository.full_name}, id: ${pullRequestId}`)

    const pullRequestDetails = await giteaService.getPullRequest(req.traceId,{repository, index: pullRequestId})
    try {
        await createSonarqubeReport({
            traceId: req.traceId,
            body: {
                pull_request: pullRequestDetails
            }
        })
    } catch (e) {
        log(req.traceId, e.message);
    }
}