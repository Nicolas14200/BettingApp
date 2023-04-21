import { Router, Request, Response } from "express";
import { SaveBet } from "../bet/SaveBet";
import { Team } from "../entities/Team";
import { ResultBet } from "../bet/ResultBet";
import { PlaceBet } from "../entities/PlaceBet";

const betRouter: Router = Router();

const betHistory: PlaceBet[] = [];

const team1: Team = {
  name: "HSC",
  odd: 150,
};
const team2: Team = {
  name: "MHSC",
  odd: 1.1,
};
const savebet = new SaveBet(team1, team2);
betRouter.post("/", (req: Request, res: Response) => {
  const amount = req.body.amount;
  const betType = req.body.bettype;
  const placeBet = savebet.betOnTeam(betType, amount);
  betHistory.push(placeBet);
  return res.status(200).send(placeBet);
});
betRouter.post("/betresult", (req: Request, res: Response) => {
  const winType = req.body.wintype
  const resultBet = new ResultBet(team1, team2);
  const win: number = resultBet.result(betHistory[0], winType);
  return res.status(200).json({
    type: betHistory[0].betType,
    amount: betHistory[0].amountOn,
    result: win
  });
});

export default betRouter;
