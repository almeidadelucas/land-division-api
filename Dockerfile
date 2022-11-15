FROM node:19-bullseye
WORKDIR /app
COPY . .

RUN npm i

EXPOSE 3000/tcp
# Command diretive is set by docker-compose file
