import { execSync } from "child_process";

execSync("npx knex migrate:make name_of_migration --ext ts");
