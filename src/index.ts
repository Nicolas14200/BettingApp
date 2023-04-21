import express from "express";
import signUpRouter from "./app/routers/SignUpRouter";
import signInRouter from "./app/routers/SignInRouter";
import usersRouter from "./app/routers/UsersRouter";
import userByIdRouter from "./app/routers/UserByIdRouter";
import dotenv from "dotenv";
import { MapUserRepository } from "./app/repositories/MapUserRepository";

dotenv.config();
const port = process.env.PORT;
export const mapUserRepository = new MapUserRepository();

const app: express.Application = express();

app.use(express.json());

app.use("/", signUpRouter);
app.use("/", signInRouter);
app.use("/users", usersRouter);
app.use("/user", userByIdRouter);



app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
