import {pullRequestActions, pullRequestCommentActions} from "./events/pull-request.actions";
import {giteaApi} from "./gitea.api";
import {log} from '../util/logger';

const events = {
    pull_request: {
        pull_request: pullRequestActions,
        pull_request_sync: pullRequestActions,
    },
    issue_comment: {
        pull_request_comment: pullRequestCommentActions
    },
}

const processHookCallback = (req) => {
    const event = req.headers['x-github-event']
    const type = req.headers['x-github-event-type']
    const action = req.body.action

    log(req.traceId, `Processing hook callback. Event: ${event}, Type: ${type}, Action: ${action}`)

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
        log(req.traceId, `triggering action: ${trigger.name}`)
        trigger(req)
    }
}

const addCommentToIssue = async (traceId, {repository, index, comment}) => {
    log(traceId, `Adding comment to issue ${index}...`)
    await giteaApi.postComment(traceId, {repository, index, comment})
}

const addStatusToCommit = async (traceId, {repository, sha, state, description, context, target_url = ''}) => {
    // log(`Adding status to commit ${sha}...`)
    await giteaApi.updateStatus(traceId, {repository, sha, state, description, context, target_url})
}

const getPullRequest = async (traceId, {repository, index}) => {
    log(traceId, `Getting pull request ${index}...`)
    return await giteaApi.getPullRequest(traceId, {repository, index})
}

export const giteaService = {
    processHookCallback,
    addCommentToIssue,
    addStatusToCommit,
    getPullRequest
}