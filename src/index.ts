import express from "express";
import signUpRouter from "./app/routers/SignUpRouter";
import signInRouter from "./app/routers/SignInRouter";
import usersRouter from "./app/routers/UsersRouter";
import userByIdRouter from "./app/routers/UserByIdRouter";
import dotenv from "dotenv";
import { UserDataBaseMap } from "./app/entities/UserDataBaseMap";

dotenv.config();
const port = process.env.PORT;
export const userDataBaseMap = new UserDataBaseMap();

const app: express.Application = express();

app.use(express.json());

app.use("/", signUpRouter);
app.use("/", signInRouter);
app.use("/users", usersRouter);
app.use("/user", userByIdRouter);

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
