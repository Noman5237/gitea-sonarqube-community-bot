import {createSonarqubeReport} from "../../sonarqube/sonarqube.triggers";

export const pullRequestTriggers = {
    opened: [createSonarqubeReport]
}

const opened = async (req) => {
    console.log('Pull request is opened!')

    const repository = req.body.pull_request.base.repo.full_name;
    const pullRequestId = req.body.pull_request.number;

    console.log(`Repository: ${repository}`)
    console.log(`Pull request id: ${pullRequestId}`)

    const triggers = pullRequestTriggers['opened']
    for (const trigger of triggers) {
        await trigger(req)
    }
}

export const pullRequestActions = {
    opened,
    synchronized: opened
}
