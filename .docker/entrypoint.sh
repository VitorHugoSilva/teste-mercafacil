#!/bin/bash
npm config set cache /home/node/app/.npm-cache --global
cd /home/node/app

npm install -g nodemon
npm install
npm run build
npm run migrate
nodemon -L