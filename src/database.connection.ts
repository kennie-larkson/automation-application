//import { Sequelize } from "sequelize";
const Sequelize = require("sequelize");
import { User } from "./entities/user.entity";

const { DATABASE, DB_URI, DB_HOST, DB_PASS, USER } = process.env;

const sequelize = new Sequelize(
  DB_URI,
  { dialect: "postgres" }
  // {
  //   database: DATABASE,
  //   dialect: "postgres",
  //   host: DB_HOST,
  //   password: DB_PASS,
  //   port: 5432,
  //   username: USER,
  // }
);

export const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection was successful");
  } catch (error) {
    console.log("Database connection failed: " + error);
  }
};
export default sequelize;
