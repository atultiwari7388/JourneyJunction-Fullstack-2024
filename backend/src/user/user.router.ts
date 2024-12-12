import express, { RequestHandler } from "express";
import { createUser } from "./user.controller";
import { createUserValidation } from "./userValidation";

const userRouter = express.Router();

//routes

userRouter.post(
  "/register",
  createUserValidation,
  createUser as RequestHandler
);

export default userRouter;
