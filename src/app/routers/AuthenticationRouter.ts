import { Router, Request, Response } from "express";
import { mapUserRepository } from "../../index";
import dotenv from "dotenv";
dotenv.config();
import { BcryptHelper } from "../utilities/BcryptHelper";
const bcrypt = new BcryptHelper();
import { JwtHelper } from "../utilities/JwtHelper";
const jwtHelper = new JwtHelper();
import { User } from "../entities/User";
import { v4 } from "uuid";
const authenticationRouter: Router = Router();


authenticationRouter.post('/signup', async (req: Request, res: Response)=>{
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



authenticationRouter.post('/signin', async (req: Request, res: Response)=>{

        const user = mapUserRepository.loadUserById(req.body.id);
        if (user){
            const passwordCorrect = await bcrypt.comparePassword(req.body.password, user.password);
            if (passwordCorrect){
                const token = jwtHelper.createToken(user.email, user.id);
                return res.status(200).send(token);
            }
            return res.status(400).send("email or password not valid !");
        }
        return res.status(400).send("email or password not valid !");
})



export default authenticationRouter;