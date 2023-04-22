import { Router, Request, Response } from "express";
import { Team } from "../entities/Team";
import { ResultBet } from "../bet/ResultBet";
import { PlaceBet } from "../entities/PlaceBet";
import { MapBetRepository } from "../repositories/MapBetRepository";

const betRouter: Router = Router();
const mapBetRepository = new MapBetRepository();

const team1: Team = {
  name: "HSC",
  odd: 150,
};
const team2: Team = {
  name: "MHSC",
  odd: 1.1,
};

const resultBet = new ResultBet(team1, team2);

betRouter.post("/", (req: Request, res: Response) => {
  const betAmount = req.body.amount;
  const betType = req.body.bettype;
  const player = req.body.player;
  const placeBet: PlaceBet = {
    match: 0,
    betType: betType,
    amountOn: betAmount,
  };
  mapBetRepository.setBet(player, placeBet);
  return res.status(200).send(placeBet);
});
betRouter.post("/result", (req: Request, res: Response) => {
  const winType = req.body.wintype;
  const player = req.body.player;
  const victory: number[] = [];
  const placeBet: PlaceBet[] = mapBetRepository.getBet(player);
  
  for (let i = 0; i < placeBet.length; i++) {
    const win: number = resultBet.result(placeBet[i], winType);
    console.log(win)
    if (win) {
      victory.push(win);
    }else{
      victory.push(0);
    }
  }
  return res.status(200).json({
    result: victory,
  });
});
betRouter.get("/", (req: Request, res: Response) => {
  const player = req.body.player;
  const placeBet: PlaceBet[] = mapBetRepository.getBet(player);
  console.log(mapBetRepository.mapBet);
  return res.status(200).json({ placeBet });
});
export default betRouter;
