import express from "express";
import {
  logout,
  see,
  githubStart,
  githubFinish,
  kakaoStart,
  kakaoFinish,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", see);
userRouter.get("/github/start", githubStart);
userRouter.get("/github/finish", githubFinish);
userRouter.get("/kakao/start", kakaoStart);
userRouter.get("/kakao/finish", kakaoFinish);
userRouter.get("/logout", logout);

export default userRouter;
