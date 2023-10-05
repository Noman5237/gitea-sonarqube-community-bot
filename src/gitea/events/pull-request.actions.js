import {createSonarqubeReport, deleteSonarqubeProject} from "../../sonarqube/sonarqube.triggers";
import {commandHandler} from "../../command/command.triggers";

export const pullRequestActions = {
    opened: [createSonarqubeReport],
    synchronized: [createSonarqubeReport],
    reopened: [createSonarqubeReport],
    closed: [deleteSonarqubeProject],
}

export const pullRequestCommentActions = {
    created: [commandHandler],
}
