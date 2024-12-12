import express, { RequestHandler } from "express";
import { createUser, loginUser } from "./user.controller";
import { createUserValidation } from "./userValidation";

const userRouter = express.Router();

//routes

userRouter.post(
  "/register",
  createUserValidation,
  createUser as RequestHandler
);

userRouter.post("/login", loginUser);

export default userRouter;
