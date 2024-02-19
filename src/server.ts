import "dotenv/config.js";
import "reflect-metadata";
import App from "./main";

(async () => {
  const app = new App();

  app.listen();
})();
