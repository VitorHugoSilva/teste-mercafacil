#!/bin/bash

cd /home/node/app

npm install
npm run clean
nodemon -L
