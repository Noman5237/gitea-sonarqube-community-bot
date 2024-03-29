import fs from "fs";
import path from "path";

import {sonarqubeApi} from "./sonarqube.api";
import {execSync, exec, spawn} from 'child_process';
import {GLOBALS} from "../globals";
import {SONARQUBE_METRICS} from "./data/sonarqube-metrics";
import {log} from '../util/logger'
import {getCommand} from "./sonarqube.strategy";

const SONARQUBE_GITEA_STATUS_MAPPER = {
  'OK': 'success',
  'WARN': 'warning',
  'ERROR': 'failure'
}

const createProject = async (req) => {
  const repository = req.body.pull_request.base.repo.full_name;
  const pullRequestId = req.body.pull_request.number;
  const projectName = `${repository}-${pullRequestId}`
  log(req.traceId, `Creating Sonarqube project... ${projectName}`)

  try {
    await sonarqubeApi.createProject({
      name: projectName,
      mainBranch: req.body.pull_request.base.ref
    })
    log(req.traceId, 'Sonarqube project created')
  } catch (e) {
    const res = e.response
    if (res.status === 400) {
      if (res.data.errors[0].msg.includes('similar key already exists')) {
        log(req.traceId, 'Project already exists')
      } else {
        throw new Error(`Error while creating Sonarqube project ${projectName}`)
      }
    }
  }

}

const deleteProject = async (traceId, projectKey) => {
  log(traceId, `Deleting Sonarqube project... ${projectKey}`)
  try {
    await sonarqubeApi.deleteProject({projectKey})
    log(traceId, 'Sonarqube project deleted')
  } catch (e) {
    const res = e.response.data
    log(traceId, 'Error while deleting Sonarqube project')
    log(traceId, `delete project status: ${res.status}`)
    throw e;
  }
}

const runAnalysis = async (traceId, repository, ref, version) => {
  log(traceId, `Running Sonarqube analysis for ${repository.full_name} on ${ref}...`)
  const projectDir = repository.projectKey
  const projectId = repository.projectKey

  // detect project and get command
  const strategy = getCommand(projectDir, {
    version,
    projectId,
    host: GLOBALS.SONARQUBE_URL,
    token: GLOBALS.SONARQUBE_TOKEN
  })

  log(traceId, `Running analysis on version: ${version} with ${strategy}`)

  try {
    // const output = execSync(command, {cwd: projectDir});
    // const output = await new Promise((resolve, reject) => exec(command, {cwd: projectDir}, () => resolve()));
    const command = strategy.split(' ')[0]
    const args = strategy.split(' ').slice(1)
    const output = spawn(command, args, {cwd: path.join("./repos", projectDir)});
    output.stdout.on('data', (data) => {
      log(traceId, data.toString().replaceAll('\n', '\n\t'));
    });
    output.stderr.on('data', (data) => {
      log(traceId, data.toString().replaceAll('\n', '\n\t'));
    });
    output.on('error', (data) => {
      log(traceId, data.toString().replaceAll('\n', '\n\t'));
    });
    // wait for child process to end
    await new Promise((resolve, reject) => {
      try {
        output.on('close', () => resolve())
      } catch (e) {
        reject(e);
      }
    });
  } catch (e) {
    log(traceId, e)
  }
}

const generateReportSummary = async (traceId, repository, ref) => {
  const projectId = repository.projectKey
  // wait for 3 seconds
  await new Promise(resolve => setTimeout(resolve, 3000));
  const report = await sonarqubeApi.getQualityGateStatus(traceId, {projectKey: projectId})
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