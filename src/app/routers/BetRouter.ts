import { Router, Request, Response } from "express";
import { Team } from "../entities/Team";
import { ResultBet } from "../bet/ResultBet";
import { PlaceBet } from "../entities/PlaceBet";
import { Coach } from "../entities/Coach";
import { MapBetRepository } from "../dataRepository/MapBetRepository";
import { victoryCounter } from "../utilities/FunctUtils";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { uuid } from 'uuidv4';
import { Player, Position } from "../entities/Player";

dotenv.config();
const jwt_key = process.env.JWT_KEY as string;
const betRouter: Router = Router();
const mapBetRepository = new MapBetRepository();





const team1: Team = {
  id : uuid(),
  name: "hsc",
  players:players,
  coach: coach,
  country: "fr",
};
const team2: Team = {
  id : string,
  name: string,
  players: Player[],
  coach: Cache,
  country: "fr",
};
const coach: Coach = {
  id: uuid(),
  name: "Mazen",
  coachedTeams : [team1, team2];
}
const resultBet = new ResultBet(team1, team2);

betRouter.post("/", (req: Request, res: Response) => {
  const betAmount = req.body.amount;
  const betType = req.body.bettype;
  const token: string = req.header("access_key") as string;
  const decoded = jwt.verify(token, jwt_key) as jwt.JwtPayload;
  const idUserToken = decoded.user.id;
  const placeBet: PlaceBet = {
    match: 0,
    betType: betType,
    amountOn: betAmount,
  };
  mapBetRepository.setBet(idUserToken, placeBet);
  return res.status(200).send(placeBet);
});
betRouter.post("/result", (req: Request, res: Response) => {
  const winType = req.body.wintype;
  const token: string = req.header("access_key") as string;
  const decoded = jwt.verify(token, jwt_key) as jwt.JwtPayload;
  const idUserToken = decoded.user.id;
  const placeBet: PlaceBet[] = mapBetRepository.getBet(idUserToken);
  if (placeBet) {
    const victory: number[] = victoryCounter(placeBet, resultBet, winType);
    return res.status(200).json({
      result: victory,
    });
  }
  return res.status(200).json({
    result: "None",
  });
});
betRouter.get("/", (req: Request, res: Response) => {
  const player = req.body.player;
  const placeBet: PlaceBet[] = mapBetRepository.getBet(player);
  return res.status(200).json({ placeBet });
});
export default betRouter;
