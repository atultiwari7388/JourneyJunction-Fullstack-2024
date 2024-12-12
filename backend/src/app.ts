import express from "express";
import globalErrorHandler from "./middlewares/globalError";
import userRouter from "./user/user.router";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Journey Junction");
});

app.use("/api/users", userRouter);

app.use(globalErrorHandler);

export default app;
