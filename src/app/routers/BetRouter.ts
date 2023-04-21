import { Router, Request, Response } from "express";

const betRouter: Router = Router();

betRouter.get("/bet",(req: Request, res: Response)=>{
    return res.status(200).send("ok");
})