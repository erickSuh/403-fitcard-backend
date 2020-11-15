# 403-fitcard-backend
Fitcard backend CRUD

## Inicio rápio

1 - Clonar repositório;

2 - Instalar dependências com `yarn` ou `npm install`;

3 - Em `src/database/config/config.json` alterar as configurações do banco de dados, mais informações em `https://sequelize.org/master/manual/getting-started.html`. Obs.: Lembrando que a aplicação foi concebida em postgress, então caso queira utilizar outro banco será necessário instalar as respectivas bibliotecas;

4 - Utilize o comando `yarn sequelize db:migrate` ou `npx sequelize db:migrate` para criar as tabelas;

5 - Utilize o comando `yarn sequelize db:seed` ou `npx sequelize db:seed` para popular as tabelas as tabelas;

6 - Por padrão a aplicação ouve a porta 5000, caso queira trocar, utilize a variável de ambiente PORT para alterar as configurações;

## Scripts

* `start` inicia aplicação;

* `dev` inicia a aplicação em ambiente de desenvolvimento com o auxílio do nodemon para reiniciar a aplicação a cada alteração de código;

## Deploy

Apenas abra uma pull request para a branch main e realize o merge, o heroku irá realizar o deploy no ambiente automaticamente;