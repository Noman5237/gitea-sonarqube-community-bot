import fs from "fs";
import path from "path";

import {sonarqubeApi} from "./sonarqube.api";
import {execSync} from 'child_process';
import {GLOBALS} from "../globals";
import {SONARQUBE_METRICS} from "./data/sonarqube-metrics";

const SONARQUBE_GITEA_STATUS_MAPPER = {
    'OK': 'success',
    'WARN': 'warning',
    'ERROR': 'failure'
}

const createProject = async (req) => {
    const repository = req.body.pull_request.base.repo.full_name;
    const pullRequestId = req.body.pull_request.number;
    const projectName = `${repository}-${pullRequestId}`
    console.log(`Creating Sonarqube project... ${projectName}`)

    try {
        await sonarqubeApi.createProject({
            name: projectName,
            mainBranch: req.body.pull_request.base.ref
        })
    } catch (e) {
        const res = e.response
        if (res.status === 400) {
            if (res.data.errors[0].msg.includes('similar key already exists')) {
                console.log('Project already exists')
            } else {
                throw new Error(`Error while creating Sonarqube project ${projectName}`)
            }
        }
    }

}

const deleteProject = async (projectKey) => {
    console.log(`Deleting Sonarqube project... ${projectKey}`)
    try {
        await sonarqubeApi.deleteProject({projectKey})
        console.log('Sonarqube project deleted')
    } catch (e) {
        const res = e.response.data
        console.log('Error while deleting Sonarqube project')
        console.log(res)
    }
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
        command = `mvn clean verify org.sonarsource.scanner.maven:sonar-maven-plugin:3.10.0.2594:sonar -Drevision=${version} -Dsonar.projectKey=${projectId} -Dsonar.host.url=${GLOBALS.SONARQUBE_URL} -Dsonar.login=${GLOBALS.SONARQUBE_TOKEN} -Dmaven.test.failure.ignore=true || echo 'build failed'`
    }

    console.log('Running analysis...')
    console.log(`version: ${version}`)

    try {
        const output = execSync(command, {cwd: projectDir});
        console.log(output.toString())
    } catch (e) {
        console.log(e)
    }
}

const generateReportSummary = async (repository, pullRequestId) => {
    const projectId = `${repository.full_name}-${pullRequestId}`.replace('/', '_')
    // wait for 3 seconds
    await new Promise(resolve => setTimeout(resolve, 3000));
    const report = await sonarqubeApi.getQualityGateStatus({projectKey: projectId})
    const status = SONARQUBE_GITEA_STATUS_MAPPER[report.status] ?? 'failure';

    let htmlCode = "";
    if (report.conditions.length > 0) {
        // Generate HTML text code
        htmlCode = "<table>\n";
        htmlCode += "  <tr>\n";
        htmlCode += "    <th>Status</th>\n";
        htmlCode += "    <th>Name</th>\n";
        htmlCode += "    <th>Error Threshold</th>\n";
        htmlCode += "    <th>Actual Value</th>\n";
        htmlCode += "  </tr>\n";

        report.conditions.forEach(condition => {
            htmlCode += "  <tr>\n";
            htmlCode += `    <td>${condition.status === "OK" ? "✅" : "❌"}</td>\n`;
            htmlCode += `    <td>${SONARQUBE_METRICS[condition.metricKey].name}</td>\n`;
            htmlCode += `    <td>${condition.errorThreshold}</td>\n`;
            htmlCode += `    <td>${condition.actualValue}</td>\n`;
            htmlCode += "  </tr>\n";
        });

        htmlCode += "</table>";
    }

    return {
        status,
        comment: `<h2>Quality Analysis Summary</h2>Status: <strong>${status.toUpperCase()}</strong>${htmlCode}<br>Check it out: ${GLOBALS.SONARQUBE_URL}/dashboard?id=${projectId}`
    }
}

export const sonarqubeService = {
    createProject,
    deleteProject,
    runAnalysis,
    generateReportSummary,
}