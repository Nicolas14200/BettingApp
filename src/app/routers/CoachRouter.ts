import { Router, Request, Response } from "express";
import { ListCoachRepository } from "../dataRepository/ListCoachRepository";
import { Coach } from "../entities/Coach";
import { v4 } from "uuid";
const coachRouter: Router = Router();
const listCoachRepository: ListCoachRepository = new ListCoachRepository();
coachRouter.post("/coach/create", (req: Request, res: Response) => {
  const coach: Coach = {
    id : v4() ,
    name : req.body.name,
    coachedTeams : []
  }
  if (!coach) {
    listCoachRepository.createCoach(coach);
    return res.status(200).send(coach);
  }
  return res.status(400).send("COACH_EXIST");
});
coachRouter.get("/coach", (req: Request, res: Response) => {
  const coach = listCoachRepository.getCoach(req.body.id);
  if (coach) {
    return res.status(200).send(coach);
  }
  return res.status(400).send("coach don't exist");
});
coachRouter.get("/coachs", (req: Request, res: Response) => {
  const coachList = listCoachRepository.getCoachs();
  return res.status(200).send(coachList);
});

export default coachRouter ;
