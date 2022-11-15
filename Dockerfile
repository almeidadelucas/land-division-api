FROM node:19-alpine3.15

WORKDIR /app
COPY . .

RUN apk add bash

RUN npm i

EXPOSE 3000/tcp
# Command diretive is set by docker-compose file
