# Base image 
FROM node:alpine
# Working directory
WORKDIR /usr/mynodeapp
COPY ./package.json  ./
RUN npm install
COPY ./  ./