import { Sequelize } from "@sequelize/core";
import { User } from "./entities/user.entity";

const sequelize = new Sequelize(
  `${process.env.DB_URI}`,
  //{ models: [User] }
  { logging: false, models: [User], dialect: "postgres" }
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
