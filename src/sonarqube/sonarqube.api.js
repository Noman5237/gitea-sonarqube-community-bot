import axios from "axios";
import qs from "qs";

import {GLOBALS} from "../globals";

const sonarqubeClient = axios.create({
    baseURL: 'http://localhost:9000/api',
    auth: {
        username: GLOBALS.SONARQUBE_TOKEN,
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    maxBodyLength: Infinity
});

const createProject = async ({name, mainBranch}) => {
    let data = qs.stringify({
        'project': name.replace('/', '_'),
        name,
        mainBranch,
        newCodeDefinitionType: 'REFERENCE_BRANCH',
        newCodeDefinitionValue: 'REFERENCE_BRANCH',
    });

    await sonarqubeClient.post('/projects/create', data);
}

export const sonarqubeApi = {
    createProject
}