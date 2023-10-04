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

export const giteaApi = {
    postComment
}