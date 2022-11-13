FROM node:19-alpine3.15
WORKDIR /app
COPY . .

RUN apk add mysql-client
RUN ./wait-for-mysql.sh
RUN npm i
RUN npx sequelize-cli db:create
RUN npx sequelize-cli db:migrate
RUN npx sequelize-cli db:seed:all

EXPOSE 3000/tcp

ENTRYPOINT [ "npm", "start" ]
