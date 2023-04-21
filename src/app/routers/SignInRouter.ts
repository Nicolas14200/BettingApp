import { Router, Request, Response } from "express";
import { mapUserRepository } from "../../index";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { BcryptHelper } from "../utilities/BcryptHelper";
const bcrypt = new BcryptHelper();
dotenv.config();

const signInRouter: Router = Router();

const jwt_key = process.env.JWT_KEY as string;

signInRouter.post('/signin', (req: Request, res: Response)=>{

        const user = mapUserRepository.loadUserById(req.body.id);
        if (user){
            const passwordCorrect = bcrypt.comparePassword(req.body.password, user.password);
            if (passwordCorrect){
                const token:string = jwt.sign({ user }, jwt_key);
                return res.status(200).send(token);
            }
            return res.status(400).send("email or password not valid !");
        }
        return res.status(400).send("email or password not valid !");
})

export default signInRouter;