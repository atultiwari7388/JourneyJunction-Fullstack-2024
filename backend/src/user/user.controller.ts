import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { validationResult } from "express-validator";

//create User
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

//login user
export async function loginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Check validation results from loginValidation middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  //check user exists in database or not
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return next(createHttpError(404, "User not found"));
    }

    //check password is matched or not
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return next(createHttpError(401, "Invalid password"));
    }

    //create accesstoken
    try {
      const token = sign({ sub: user._id }, config.jwtSecret as string, {
        expiresIn: "7d",
        algorithm: "HS256",
      });

      res.status(200).json({
        accessToken: token,
        message: "User logged in successfully",
        user: user,
      });
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
}
