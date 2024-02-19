import { Router } from "express";
import type { Request, Response } from "express";
import { UserModel } from "./../models/UserModel";
import { PostModel, PostType } from "./../models/PostModel";

export const router = Router();

router.get("/users", async (req: Request, res: Response) => {
  try {
    res.json({
      data: await UserModel.all(),
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.get("/posts", async (req: Request, res: Response) => {
  try {
    res.json({
      data: await PostModel.all(),
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.get("/posts/:id", async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).json({
      message: "Bad Request",
    });
  }

  try {
    res.json({
      data: await PostModel.findById<PostType>(req.params.id),
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.get("/health", (req: Request, res: Response) => {
  res.status(200).send("ok");
});
