FROM node:alpine
WORKDIR /app
COPY . .

RUN npm i
#RUN ./wait-for-mysql.sh mysqldb:3306 -- npx sequelize-cli db:create && \
#                                          npx sequelize-cli db:migrate && \
#                                          npx sequelize-cli db:seed:all
#
EXPOSE 3000/tcp

# ENTRYPOINT [ "npm", "start" ]
