import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

export { app };
