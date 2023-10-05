import {createSonarqubeReport} from "../../sonarqube/sonarqube.triggers";
import {giteaService} from "../../gitea/gitea.service";

export const review = async (req) => {
    const repository = req.body.repository;
    const pullRequestId = req.body.issue.number;
    const pullRequestDetails = await giteaService.getPullRequest({repository, index: pullRequestId})
    await createSonarqubeReport({
        body: {
            pull_request: pullRequestDetails
        }
    })
}