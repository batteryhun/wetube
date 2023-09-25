import express from "express";
import {
  edit,
  removeUser,
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
userRouter.get("/edit", edit);
userRouter.get("/delete", removeUser);

export default userRouter;
