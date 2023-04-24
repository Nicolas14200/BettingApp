import { Bet, BetType } from "../entities/Bet";
import { Match } from "../entities/Match";
import { BetRepository } from "../repositories/BetRepository";

export class ListBetRepository implements BetRepository {
  betList: Bet[] = [];
  getBet(id: string): Bet   {
    let bet: Bet | undefined = undefined ;
    this.betList.forEach(element=>{
        if (element.id === id){
            bet = element
        }
    })
    return bet;
  }
  getBets(): Bet[] {
    return this.betList;
  }
  createBet(
    userId: string,
    id: string,
    amount: number,
    currency: string,
    match: Match,
    creationDate: Date
  ): Bet   {
    let betExist: boolean = false;
    this.betList.forEach((element) => {
      if (element.id === id) {
        const bet: Bet = {
          userId: userId,
          id: id,
          betType: BetType.teamA,
          amount: amount,
          currency: currency,
          match: match,
          creationDate: creationDate,
          limitDate: creationDate,
        };
        return bet;
      }
    });

    
  }
}
