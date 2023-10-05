import {pullRequestActions, pullRequestCommentActions} from "./events/pull-request.actions";
import {giteaApi} from "./gitea.api";

const events = {
    pull_request: {
        pull_request: pullRequestActions,
    },
    issue_comment: {
        pull_request_comment: pullRequestCommentActions
    },
}

const processHookCallback = (req) => {
    console.log('Processing hook callback...')
    const event = req.headers['x-github-event']
    const type = req.headers['x-github-event-type']
    const action = req.body.action

    const eventWrapper = events[event]
    if (event === undefined) {
        return;
    }

    const eventActions = eventWrapper[type]
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

const getPullRequest = async ({repository, index}) => {
    console.log(`Getting pull request ${index}...`)
    return await giteaApi.getPullRequest({repository, index})
}

export const giteaService = {
    processHookCallback,
    addCommentToIssue,
    addStatusToCommit,
    getPullRequest
}