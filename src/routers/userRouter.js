import express from "express";
import {
  logout,
  see,
  githubStart,
  githubFinish,
  kakaoStart,
  kakaoFinish,
  getEdit,
  postEdit,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import {
  avatarUpload,
  protectorMiddleware,
  publicOnlyMiddleware,
} from "../middleware";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", see);
userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userRouter.get("/github/start", publicOnlyMiddleware, githubStart);
userRouter.get("/github/finish", publicOnlyMiddleware, githubFinish);
userRouter.get("/kakao/start", publicOnlyMiddleware, kakaoStart);
userRouter.get("/kakao/finish", publicOnlyMiddleware, kakaoFinish);
userRouter.get("/logout", protectorMiddleware, logout);
userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);

export default userRouter;
