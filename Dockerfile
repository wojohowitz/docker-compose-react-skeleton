FROM node:8.1.2-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .
