FROM ubuntu:jammy
LABEL authors="noman637"
ENV TZ="Asia/Dhaka"

RUN apt-get update
RUN apt-get -y install ca-certificates curl wget
RUN apt-get -y install openjdk-17-jdk
RUN apt-get -y install git vim

RUN wget https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz
RUN tar -xvzf apache-maven-3.9.6-bin.tar.gz
RUN mv apache-maven-3.9.6 /opt
ENV M2_HOME=/opt/apache-maven-3.9.6
ENV M2=$M2_HOME/bin
ENV PATH=$M2:$PATH

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
RUN chmod +x /root/.nvm/nvm.sh
RUN . /root/.nvm/nvm.sh && nvm install 18.17.0
ENV PATH="/bin/versions/node/v18.17.0/bin/:${PATH}"
RUN node -v

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
