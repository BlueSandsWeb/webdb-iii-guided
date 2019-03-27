# Web DB III Guided Project

Guided project for **Web DB III** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- [This Query Tool Loaded in the browser](https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top).
- [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `yarn` or `npm i` to download dependencies.
- [ ] type `yarn server` or `npm run server` to start the API.

Please follow along as the instructor uses Knex migrations and seeding to manage the database schema and add test data.


STEPS: 
npx knex
npx knex init
make changes to knexfile.js
npx knex migrate:make roles_table
make changes to migration file
npx knex migrate:latest