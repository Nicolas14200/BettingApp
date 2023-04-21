import { Router, Request, Response } from "express";
import { mapUserRepository } from "../../index";
import { User } from "../entities/User";
import { v4 } from "uuid";
import { BcryptHelper } from "../utilities/BcryptHelper";

const signUpRouter: Router = Router();
const bcrypt = new BcryptHelper();

signUpRouter.post('/signup',(req: Request, res: Response)=>{
    const user: User = {
        id: v4(),
        email: req.body.email,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        password: bcrypt.hashPassword(req.body.password),
      };
      mapUserRepository.saveUser(user)
    return res.status(200).send(user);
})

export default signUpRouter;

