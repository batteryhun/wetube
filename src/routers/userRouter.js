import express from "express";
import { edit, removeUser, logout, see } from "../controllers/userController";

const userRounter = express.Router();

userRounter.get("/:id(\\d+)", see);
userRounter.get("/logout", logout);
userRounter.get("/edit", edit);
userRounter.get("/delete", removeUser);

export default userRounter;
