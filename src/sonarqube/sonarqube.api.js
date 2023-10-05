import axios from "axios";
import qs from "qs";

import {GLOBALS} from "../globals";

const sonarqubeClient = axios.create({
    baseURL: 'http://localhost:9000/api',
    auth: {
        username: GLOBALS.SONARQUBE_TOKEN,
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

    await sonarqubeClient.post('/projects/create', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}

const deleteProject = async ({projectKey}) => {
    await sonarqubeClient.post(`/projects/delete?project=${projectKey}`);
}

const getQualityGateStatus = async ({projectKey}) => {
    const res = await sonarqubeClient.get(`/qualitygates/project_status?projectKey=${projectKey}`)
    console.log(`project: ${projectKey} status: ${res.data.projectStatus.status}`)
    return res.data.projectStatus
}

export const sonarqubeApi = {
    createProject,
    deleteProject,
    getQualityGateStatus
}