import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, password, userName } = req.body;

  //validation
  if (!name || !email || !password || !userName) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  res.json({ message: "User created successfully" });
}
