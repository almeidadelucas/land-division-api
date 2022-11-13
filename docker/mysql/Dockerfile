FROM mysql:8.0.31-debian

ENV MYSQL_ROOT_PASSWORD=root

RUN apt install nodejs npm -y

WORKDIR /app

COPY ../../ .

RUN npx sequelize-cli db:create
RUN npx sequelize-cli db:migrate
RUN npx sequelize-cli db:seed:all

EXPOSE 3306
