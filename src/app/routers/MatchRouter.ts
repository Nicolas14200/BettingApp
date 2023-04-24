import { Router, Response, Request } from "express";
import { Match } from "../entities/Match";
import { ListMatchRepository } from "../dataRepository/ListMatchRepository";
import { ListTeamRepository } from "../dataRepository/ListTeamRepository";

import {v4} from "uuid";

const matchRouter = Router();
const listMatchRepository = new ListMatchRepository();
const listTeamRepository = new ListTeamRepository();

matchRouter.post("/match", (req: Request, res: Response) => {
  try { 
  
    const match : Match = {
      dateMatch : new Date(),
      teamA : req.body.teamA,
      team
    }
    const result = listMatchRepository.createMatch(match);
    res.status(200).send(match);
  } catch (error) {
    res.status(400).send("Something wrong");
  }
});


matchRouter.get("/match", (req: Request, res: Response) => {
    try {
      const match = listMatchRepository.getMatch(matchId)
      res.status(200).send(match);
    } catch (error) {
      res.status(400).send("Something wrong");
    }
  });

  export default matchRouter