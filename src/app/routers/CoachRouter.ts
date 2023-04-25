import { Router, Request, Response } from "express";
import { ListCoachRepository } from "../dataRepository/ListCoachRepository";
import { Coach } from "../entities/Coach";
const coachRouter: Router = Router();
const listCoachRepository: ListCoachRepository = new ListCoachRepository();
coachRouter.post("/coach/create", (req: Request, res: Response) => {
  const id = req.body.id;
  const name = req.body.name;
  const coachedTeams = [];
  const coach = listCoachRepository.createCoach(id, name, coachedTeams);
  if (!coach) {
    return res.status(200).send(coach);
  }
  return res.status(400).send("coach exist");
});
coachRouter.get("/coach", (req: Request, res: Response) => {
  const coach: void | Coach = listCoachRepository.getCoach(req.body.id);
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
