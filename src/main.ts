import express, { Request, Response } from "express";
import { router } from "./router";

class Application {
  public app: express.Application;
  private port = process.env.SERVER_PORT;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.home();
  }

  private initializeMiddlewares = () => {
    this.app.use(express.json());
    this.app.use("/api/v1", router);
  };

  private home = () => {
    this.app.get("/", (req: Request, res: Response): Response => {
      return res.send("Automation Application is live 🤟");
    });
  };

  public listen = () => {
    this.app.listen(this.port, () => {
      console.log(`Automation server listening on port ${this.port}`);
    });
  };
}

export default Application;
