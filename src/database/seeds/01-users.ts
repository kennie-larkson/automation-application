require("dotenv").config();
import * as process from "process";
import { Knex } from "knex";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const tableName = "users";
const defaultPassword =
  (process.env.DEFAULT_PASSWORD as string) ||
  "SomeVerySensitiveDefaultPassword321#";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();
  const hashedPassword: string = await bcrypt.hash(defaultPassword, 10);

  const users = Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      email: faker.internet.email().toLowerCase(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
    }));

  // Inserts seed entries
  await knex(tableName).insert(
    users.map((user) => ({ ...user, password: hashedPassword }))
  );
}
