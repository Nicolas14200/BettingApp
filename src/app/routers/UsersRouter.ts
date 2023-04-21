import { Router, Request, Response } from "express";
import { mapUserRepository } from "../../index";

const usersRouter: Router= Router();

usersRouter.get('/',(req: Request, res: Response)=>{
    const users = mapUserRepository.getUsers();
    return res.status(200).send({users: [...users]});
})
export default usersRouter;