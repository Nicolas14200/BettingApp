import { Router, Request, Response } from "express";
import { userDataBaseMap } from "../../index";

const usersRouter: Router= Router();

usersRouter.get('/',(req: Request, res: Response)=>{
    const users = userDataBaseMap.getUsers();
    return res.status(200).send({users: [...users]});
})
export default usersRouter;