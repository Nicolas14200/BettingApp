import { Bet } from "../entities/Bet";
import { Match } from "../entities/Match";

export interface BetRepository {
  getBet(id: string): Bet;
  getBets(): Bet[];
  createBet(bet : Bet): Bet  ;
}
