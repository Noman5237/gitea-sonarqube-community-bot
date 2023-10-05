import {pullRequestActions} from "./events/pull-request.actions";
import {giteaApi} from "./gitea.api";

const events = {
    'pull_request': pullRequestActions,
}

const processHookCallback = (req) => {
    console.log('Processing hook callback...')
    const event = req.headers['x-github-event']
    const action = req.body.action

    const eventActions = events[event]
    if (eventActions === undefined) {
        return;
    }

    const actionTriggers = eventActions[action]
    if (actionTriggers === undefined) {
        return
    }

    for (const trigger of actionTriggers) {
        trigger(req)
    }
}

const addCommentToIssue = async ({repository, index, comment}) => {
    console.log(`Adding comment to issue ${index}...`)
    await giteaApi.postComment({repository, index, comment})
}

const addStatusToCommit = async ({repository, sha, state, description, context, target_url = ''}) => {
    console.log(`Adding status to commit ${sha}...`)
    await giteaApi.updateStatus({repository, sha, state, description, context, target_url})
}

export const giteaService = {
    processHookCallback,
    addCommentToIssue,
    addStatusToCommit
}