import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import mainRouter from "./app/router";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application router

app.use("/api/v1", mainRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});



app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const message = err.message || "Something went wrong";
  return res.status(500).json({
    success: false,
    message,
    error: err,
  });
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success:false,
    message:"API Not Found"
  });
});

export default app;
