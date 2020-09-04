FROM node:12.18.3-alpine3.12

RUN apk add --no-cache bash

RUN touch /root/.bashrc | echo "PS1='w$ '" >> /root/.bashrc

#RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm install -g @loopback/cli
RUN npm install -g nodemon

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app
