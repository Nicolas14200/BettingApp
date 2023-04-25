import { Router, Request, Response, request } from "express";
import { ListBetRepository } from "../dataRepository/ListBetRepository";

const betRouter: Router = Router();
const listBetRepsitory = new ListBetRepository();

betRouter.post("/createbet",(req: Request, res: Response) => {
  
})



export default betRouter;