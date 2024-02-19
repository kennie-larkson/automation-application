import "dotenv/config.js";
import "reflect-metadata";
//import sequelize, { dbConnection } from "./database.connection";
import App from "./main";

// const start = async (): Promise<void> => {
//   try {
//     // await dbConnection();
//     await sequelize
//       .sync()
//       .then(async () => {
//         const syncedModels = Object.keys(sequelize.models);

//         console.log("Synced models:");
//         syncedModels.forEach((modelName) => {
//           console.log("- " + modelName);
//         });

//         console.log("Models successfully synced");
//       })
//       .catch((err) => {
//         console.log("Unable to sync models", err);
//       });
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

(async () => {
  const app = new App();

  app.listen();
  //start();
})();

//start();
