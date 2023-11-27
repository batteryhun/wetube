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
  postChangePassword,
  getChangePassword,
} from "../controllers/userController";
import {
  protectorMiddleware,
  publicOnlyMiddleware,
  uploadAvatar,
} from "../middleware";

const userRouter = express.Router();

userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(uploadAvatar.single("avatar"), postEdit);
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

userRouter.get("/:id", see);
export default userRouter;
