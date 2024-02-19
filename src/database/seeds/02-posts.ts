import { faker } from "@faker-js/faker";
import { Knex } from "knex";

const tableName = "posts";

exports.seed = async function (knex: Knex) {
  await knex(tableName).del();
  const users = await knex("users").select("*");

  const fake_posts = users.map((user, index) => ({
    id: index + 1,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    user_id: user.id,
  }));

  await knex(tableName).insert(fake_posts);
};
