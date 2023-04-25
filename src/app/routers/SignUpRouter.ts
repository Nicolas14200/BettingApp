import { Router, Request, Response } from "express";
import { mapUserRepository } from "../../index";
import { User } from "../entities/User";
import { v4 } from "uuid";
import { BcryptHelper } from "../utilities/BcryptHelper";
import { JwtHelper } from "../utilities/JwtHelper";
const jwtHelper = new JwtHelper()
const signUpRouter: Router = Router();
const bcrypt = new BcryptHelper();

signUpRouter.post('/signup', async (req: Request, res: Response)=>{
    const user: User = {
        id: v4(),
        email: req.body.email,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        password: await bcrypt.hashPassword(req.body.password),
      };
      const token = jwtHelper.createToken(user.email, user.id);
      mapUserRepository.saveUser(user)
    return res.status(200).send(token);
})

export default signUpRouter;

