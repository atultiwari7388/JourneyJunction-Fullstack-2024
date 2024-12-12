import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { validationResult } from "express-validator";

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Check validation results from createUserValidation middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, userName } = req.body;
  try {
    //check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      const error = createHttpError(400, "User already exists");
      return next(error);
    }

    //password => hash password
    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcryptSaltRounds)
    );

    //create user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
      userName,
    });

    //token generation JWT
    try {
      const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
        expiresIn: "7d",
        algorithm: "HS256",
      });

      res.status(201).json({
        accessToken: token,
        message: "User created successfully",
        user: newUser,
      });
    } catch (error) {
      const err = createHttpError(
        500,
        `Error while signing the jwt token ${error}`
      );
      return next(err);
    }
  } catch (error) {
    next(error);
  }
}
