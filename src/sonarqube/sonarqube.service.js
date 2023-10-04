import {sonarqubeApi} from "./sonarqube.api";
import {execSync} from 'child_process';
import {GLOBALS} from "../globals";
import fs from "fs";
import path from "path";

const createProject = async (req) => {
    const repository = req.body.pull_request.base.repo.full_name;
    const pullRequestId = req.body.pull_request.number;
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

    // detect project is gradle or maven
    const gradleFile = path.join(projectDir, 'build.gradle')
    const pomFile = path.join(projectDir, 'pom.xml')

    let command = ''
    if (!fs.existsSync(gradleFile) && !fs.existsSync(pomFile)) {
        console.log('Project is not gradle or maven')
        return
    } else if (fs.existsSync(gradleFile)) {
        /**
         * ./gradlew sonar \
         *   -Pversion=1.0.0 \
         *   -Dsonar.projectKey=gitea-sq-org_gitea-sq-test-repo-41 \
         *   -Dsonar.host.url=http://localhost:9000 \
         *   -Dsonar.login=squ_21603ba435c62cecf014c26195e1bd51116c9b0c
         */
        command = `./gradlew clean sonar -Pversion=${version} -Dsonar.projectKey=${projectId} -Dsonar.host.url=${GLOBALS.SONARQUBE_URL} -Dsonar.login=${GLOBALS.SONARQUBE_TOKEN}`
    } else if (fs.existsSync(pomFile)) {
        /**
         * mvn clean verify sonar:sonar \
         *   -Drevision=1.0.0 \
         *   -Dsonar.projectKey=gitea-sq-org_gitea-sq-test-repo-72 \
         *   -Dsonar.host.url=http://localhost:9000 \
         *   -Dsonar.login=squ_21603ba435c62cecf014c26195e1bd51116c9b0c
         */
        command = `./mvnw clean verify org.sonarsource.scanner.maven:sonar-maven-plugin:3.10.0.2594:sonar -Drevision=${version} -Dsonar.projectKey=${projectId} -Dsonar.host.url=${GLOBALS.SONARQUBE_URL} -Dsonar.login=${GLOBALS.SONARQUBE_TOKEN}`
    }

    // const command = `./gradlew clean sonar -Pversion=${version} -Dsonar.projectKey=${projectId} -Dsonar.host.url=${GLOBALS.SONARQUBE_URL} -Dsonar.login=${GLOBALS.SONARQUBE_TOKEN}`
    console.log(command)
    console.log('Running analysis...')
    console.log(`version: ${version}`)

    try{
        const output = execSync(command, {cwd: projectDir});
        console.log(output.toString())
    } catch (e) {
        console.log(e)
    }
}

export const sonarqubeService = {
    createProject,
    runAnalysis,
}