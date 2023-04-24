import { Bet } from "../entities/Bet";
import { Match } from "../entities/Match";

export interface BetRepository {
  getBet(id: string): Bet  ;
  getBets(): Bet[];
  createBet(
    userId: string,
    id: string,
    amount: number,
    currency: string,
    match: Match,
    creationDate: Date
  ): Bet  ;
}
