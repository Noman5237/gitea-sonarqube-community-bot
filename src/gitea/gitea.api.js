import axios from "axios";
import {GLOBALS} from "../globals";

const giteaClient = axios.create({
    baseURL: `${GLOBALS.GITEA_URL}/api/v1`,
    timeout: 1000,
    headers: {
        'Authorization': `token ${GLOBALS.GITEA_TOKEN}`
    },
});

const postComment = async ({repository, index, comment}) => {
    const owner = repository.owner.login
    const repo = repository.name
    const url = `/repos/${owner}/${repo}/issues/${index}/comments`
    const body = {
        body: comment
    }

    const res = await giteaClient.post(url, body)
    console.log(res)
    if (res.status !== 201) {
        throw new Error(`Error while posting comment to pull request ${index}`)
    }
}

const updateStatus = async ({repository, sha, state, description, context, target_url = ''}) => {
    const owner = repository.owner.login
    const repo = repository.name
    const url = `/repos/${owner}/${repo}/statuses/${sha}`
    const body = {
        state,
        description,
        context,
        target_url
    }

    const res = await giteaClient.post(url, body)
    console.log(res)
    if (res.status !== 201) {
        throw new Error(`Error while updating status of commit ${sha}`)
    }
}

const getPullRequest = async ({repository, index}) => {
    const owner = repository.owner.login
    const repo = repository.name
    const url = `/repos/${owner}/${repo}/pulls/${index}`

    const res = await giteaClient.get(url)
    console.log(res)
    if (res.status !== 200) {
        throw new Error(`Error while getting pull request ${index}`)
    }
    return res.data
}

export const giteaApi = {
    postComment,
    updateStatus,
    getPullRequest
}