import express from "express";
import {
  logout,
  see,
  githubStart,
  githubFinish,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", see);
userRouter.get("/github/start", githubStart);
userRouter.get("/github/finish", githubFinish);
userRouter.get("/logout", logout);

export default userRouter;
