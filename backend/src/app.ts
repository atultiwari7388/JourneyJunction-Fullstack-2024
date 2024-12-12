import express from "express";
import globalErrorHandler from "./middlewares/globalError";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Journey Junction");
});

app.use(globalErrorHandler);

export default app;
