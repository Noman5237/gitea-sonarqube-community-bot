import {createSonarqubeReport, deleteSonarqubeProject} from "../../sonarqube/sonarqube.triggers";

export const pullRequestActions = {
    opened: [createSonarqubeReport],
    synchronized: [createSonarqubeReport],
    reopened: [createSonarqubeReport],
    closed: [deleteSonarqubeProject],
}
