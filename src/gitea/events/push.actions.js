import {createSonarqubeReportOnPush} from "../../sonarqube/sonarqube.triggers";

export const pushActions = {
  push: [createSonarqubeReportOnPush],
}
