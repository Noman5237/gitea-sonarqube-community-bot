import fs from "fs";
import path from "path";

const strategies = [
  {
    name: `maven`,
    files: ['pom.xml'],
    command: ({
                version,
                projectId,
                host,
                token
              }) => `./mvnw clean verify org.sonarsource.scanner.maven:sonar-maven-plugin:3.10.0.2594:sonar -Drevision=${version} -Dsonar.projectKey=${projectId} -Dsonar.host.url=${host} -Dsonar.login=${token} -Dmaven.test.failure.ignore=true`
  },
  {
    name: `gradle`,
    files: ['build.gradle'],
    command: ({
                version,
                projectId,
                host,
                token
              }) => `./gradlew clean sonar -Prevision=${version} -Dsonar.projectKey=${projectId} -Dsonar.host.url=${host} -Dsonar.login=${token}`
  }
]

export const getCommand = (projectDir, {version, projectId, host, token}) => {
  for (const strategy of strategies) {
    if (strategy.files.every(file => fs.existsSync(path.join('./repos', projectDir, file)))) {
      return strategy.command({version, projectId, host, token})
    }
  }

  return null
}
