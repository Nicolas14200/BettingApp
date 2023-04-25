import express from "express";
import usersRouter from "./app/routers/UsersRouter";
import betRouter from './app/routers/BetRouter';
import {env} from "./app/utilities/VarEnv";
import { MapUserRepository } from "./app/dataRepository/MapUserRepository";
import authMiddleWare from "./app/middleWares/AuthMiddleWare";
import playerRouter from "./app/routers/PlayerRouter"
import coachRouter from "./app/routers/CoachRouter"
import matchRouter from "./app/routers/MatchRouter"
import authenticationRouter from "./app/routers/AuthenticationRouter";

const port = env.PORT;
const jwt_key = env.JWT_KEY as string;
export const mapUserRepository = new MapUserRepository();

const app: express.Application = express();

app.use(express.json());

app.use(authenticationRouter);

app.use(usersRouter);
app.use(authMiddleWare, playerRouter);
app.use(authMiddleWare, matchRouter);
app.use(authMiddleWare, coachRouter);
app.use(authMiddleWare, betRouter);


app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
