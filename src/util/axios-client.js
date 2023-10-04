import axios from "axios";
import {GLOBALS} from "../globals";

export const giteaClient = axios.create({
    baseURL: `${GLOBALS.GITEA_URL}/api/v1`,
    timeout: 1000,
    headers: {
        'Authorization': `token ${GLOBALS.GITEA_TOKEN}`
    },
});
