import express from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalError";
import userRouter from "./user/user.router";
import { config } from "./config/config";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: config.frontendURL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to the Journey Junction");
});

app.use("/api/users", userRouter);

app.use(globalErrorHandler);

export default app;
