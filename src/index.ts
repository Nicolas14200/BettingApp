import express from "express";
import signUpRouter from "./app/routers/SignUpRouter";
import signInRouter from "./app/routers/SignInRouter";
import usersRouter from "./app/routers/UsersRouter";
import userByIdRouter from "./app/routers/UserByIdRouter";
import betRouter from './app/routers/BetRouter';
import dotenv from "dotenv";
dotenv.config();
import { MapUserRepository } from "./app/dataRepository/MapUserRepository";
import jwt from "jsonwebtoken";
import authMiddleWare from "./app/middleWares/AuthMiddleWare";
import playerRouter from "./app/routers/PlayerRouter"
import coachRouter from "./app/routers/CoachRouter"
import matchRouter from "./app/routers/MatchRouter"



const port = process.env.PORT;
const jwt_key = process.env.JWT_KEY as string;
export const mapUserRepository = new MapUserRepository();

const app: express.Application = express();

app.use(express.json());

app.use(signUpRouter);
app.use(signInRouter);
app.use(usersRouter);
app.use(authMiddleWare, playerRouter);
app.use(authMiddleWare, matchRouter);
app.use(authMiddleWare, coachRouter);
app.use(authMiddleWare, betRouter);


app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
