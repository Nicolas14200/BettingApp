import { Router, Request, Response } from "express";
import { userDataBaseMap } from "../../index";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Bcrypt } from "../utility/Bcrypt";
const bcrypt = new Bcrypt();
dotenv.config()

const signInRouter: Router = Router();

const jwt_key = process.env.JWT_KEY as string;

signInRouter.post('/signin', (req: Request, res: Response)=>{

        const user = userDataBaseMap.loadUserById(req.body.id);
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