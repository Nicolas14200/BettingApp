import { Router, Request, Response } from "express";
import { userDataBaseMap } from "../../index";

const userByIdRouter: Router = Router();

userByIdRouter.get('/',  (req: Request, res: Response)=>{
   const user = userDataBaseMap.loadUserById(req.body.id);
   if (user){
    return res.status(200).send(user);
   }
})

export default userByIdRouter;