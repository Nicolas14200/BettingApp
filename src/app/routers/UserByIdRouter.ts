import { Router, Request, Response } from "express";
import { mapUserRepository } from "../../index";

const userByIdRouter: Router = Router();

userByIdRouter.get('/',  (req: Request, res: Response)=>{
   const user = mapUserRepository.loadUserById(req.body.id);
   if (user){
    return res.status(200).send(user);
   }
})

export default userByIdRouter;