import { NextFunction, Request, Response } from "express";

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.json({
    message: "User created successfully",
  });
}
