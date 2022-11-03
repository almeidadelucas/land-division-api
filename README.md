# land-division-api

## Pre requisitos:

- Node 14;
- Mysql;

## Rodando a Aplicação

1 - Instale as dependências do projeto:

```sh
npm i
```

2 - É necessário que você tenha uma base mysql rodando localmente. Como sugestão, usaremos docker (se já tiver a base, vá para o passo 3).

2.1 - Instale o (docker)[https://www.docker.com/] na sua máquina;
2.2 - Faça pull da imagem mysql:

```sh
docker pull mysql
```

2.3 - Crie um container com essa imagem:

```sh
docker run --name lands-division-db -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:latest
```

3 - Crie a base de dados que a aplicação irá utilizar

```sh
npx sequelize-cli db:create
```

4 - Rode as migrações

```sh
npx sequelize-cli db:migrate
```

5 - Rode as seeds

```sh
npx sequelize-cli db:seed:all
```

5 - Após isso, poderemos iniciar nossa aplicação em modo desenvolvimento que iniciará na porta `3000`

```sh
npm start
```
