import Table, {
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import sequelize from "database.connection";
import { UUID } from "sequelize";

// export class User extends Model<
//   InferAttributes<User>,
//   InferCreationAttributes<User>
// > {
//   // @Attribute(DataTypes.INTEGER)
//   // @PrimaryKey
//   // @AutoIncrement
//   // declare id: CreationOptional<number>;
//   // @Attribute(DataTypes.STRING)
//   // @NotNull
//   // declare firstName: string;
//   // @Attribute(DataTypes.STRING)
//   // declare lastName: string | null;
//   // getFullName() {
//   //   return [this.firstName, this.lastName].join(" ");
//   // }
// }
export class User extends Model {}

User.init(
  {
    id: { type: DataTypes.UUID, primaryKey: true },
  },
  { sequelize, modelName: "User", tableName: "users" }
);
