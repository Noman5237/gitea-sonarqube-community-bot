FROM node:18.17.0-bullseye
LABEL authors="noman637"
ENV TZ="Asia/Dhaka"

RUN apt update
RUN apt -y upgrade
RUN apt -y install gnupg2 curl wget
RUN apt -y install openjdk-17-jdk
RUN apt -y install maven
RUN apt install -y git vim

COPY . /app
WORKDIR /app

RUN rm -rf node_modules
RUN rm -rf repos
RUN rm -rf dist
RUN npm ci
RUN npm run build-prod

VOLUME /app/traces
VOLUME /app/repos
VOLUME /root/.m2

ENTRYPOINT ["node", "./dist/app.js"]
