import type, { Knex } from "knex";
require("dotenv").config();
require("ts-node/register");
const environments: string[] = ["development", "staging", "production"];

const { DB_URI, DB_USER, DB_PASS, DATABASE } = process.env;

const connection: Knex.ConnectionConfig = {
  host: "localhost",
  user: DB_USER,
  password: DB_PASS,
  database: DATABASE,
};

const commonConfig: Knex.Config = {
  client: "pg",
  connection,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "src/database/migrations",
  },
  seeds: {
    directory: "src/database/seeds",
  },
};

export default Object.fromEntries(
  environments.map((env: string) => [env, commonConfig])
);
