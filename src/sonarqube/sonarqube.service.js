import {sonarqubeApi} from "./sonarqube.api";
import {execSync} from 'child_process';
import {GLOBALS} from "../globals";
import fs from "fs";
import path from "path";

const createProject = async (req) => {
    const repository = req.body.pull_request.base.repo.full_name;
    const pullRequestId = req.body.pull_request.id;
    const projectName = `${repository}-${pullRequestId}`
    console.log(`Creating Sonarqube project... ${projectName}`)
    await sonarqubeApi.createProject({
        name: projectName,
        mainBranch: req.body.pull_request.base.ref
    })
}

const runAnalysis = (repository, pullRequestId, version) => {
    console.log(`Running Sonarqube analysis for ${repository} pull request ${pullRequestId}...`)
    const projectId = `${repository.full_name}-${pullRequestId}`.replace('/', '_')
    const projectDir = path.join(process.cwd(), './repos', `${repository.full_name.replace('/', '-')}`)
    /**
     * ./gradlew sonar \
     *   -Dsonar.projectKey=gitea-sq-org_gitea-sq-test-repo-41 \
     *   -Dsonar.host.url=http://localhost:9000 \
     *   -Dsonar.login=squ_21603ba435c62cecf014c26195e1bd51116c9b0c
     */

    const cmd = `./gradlew clean sonar -Pversion=${version} -Dsonar.projectKey=${projectId} -Dsonar.host.url=${GLOBALS.SONARQUBE_URL} -Dsonar.login=${GLOBALS.SONARQUBE_TOKEN}`
    console.log(cmd)
    console.log('Running analysis...')
    console.log(`version: ${version}`)

    const output = execSync(cmd, {cwd: projectDir});
    console.log(output.toString())
}

export const sonarqubeService = {
    createProject,
    runAnalysis,
}