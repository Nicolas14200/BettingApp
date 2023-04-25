import { Router, Response, Request } from "express";
import { Match } from "../entities/Match";
import { ListMatchRepository } from "../dataRepository/ListMatchRepository";
import { ListTeamRepository } from "../dataRepository/ListTeamRepository";

import { v4 } from "uuid";

const matchRouter = Router();
const listMatchRepository = new ListMatchRepository();
const listTeamRepository = new ListTeamRepository();

matchRouter.post("/match/create", (req: Request, res: Response) => {
  const teamA = listTeamRepository.getTeam(req.body.teamAId);
  const teamB = listTeamRepository.getTeam(req.body.teamBId);
  try {
    const match: Match = {
      id: v4(),
      dateMatch: new Date(),
      teamA: teamA,
      teamB: teamB,
    };
    listMatchRepository.createMatch(match);
    return res.status(200).send(match);
  } catch (error) {
    return res.status(400).send(error);
  }
});

matchRouter.get("/match", (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const match = listMatchRepository.getMatch(id);
    res.status(200).send(match);
  } catch (error) {
    res.status(400).send(error);
  }
});
matchRouter.get("/matchs", (req: Request, res: Response) => {
  try {
    const matchs = listMatchRepository.getMatchs();
    res.status(200).send(matchs);
  } catch (error) {
    res.status(400).send(error);
  }
});
export default matchRouter;
