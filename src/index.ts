import express from "express";
import signUpRouter from "./app/routers/SignUpRouter";
import signInRouter from "./app/routers/SignInRouter";
import usersRouter from "./app/routers/UsersRouter";
import userByIdRouter from "./app/routers/UserByIdRouter";
import betRouter from './app/routers/BetRouter';
import dotenv from "dotenv";
import { MapUserRepository } from "./app/repositories/MapUserRepository";
import jwt from "jsonwebtoken";

dotenv.config();
const port = process.env.PORT;
const jwt_key = process.env.JWT_KEY as string;
export const mapUserRepository = new MapUserRepository();

const app: express.Application = express();

app.use(express.json());

app.use("/", signUpRouter);
app.use("/", signInRouter);
app.use("/users", usersRouter);
app.use("/user", userByIdRouter);
// MIDDLE WARE
app.use(function (req:express.Request, res:express.Response, next:any): void {
  const token: string = req.header('access_key') as string;
  jwt.verify(token, jwt_key, (err: jwt.VerifyErrors | null, decoded: string | jwt.JwtPayload | undefined) => {
      if (err) {
          return res.status(404).send(err);
      }
      return next();
  });
});
app.use("/bet", betRouter);

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
