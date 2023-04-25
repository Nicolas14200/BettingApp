import { Bet, BetType } from "../entities/Bet";
import { Match } from "../entities/Match";
import { BetRepository } from "../repositories/BetRepository";

export class ListBetRepository implements BetRepository {
  betList: Bet[] = [];
  getBet(id: string): Bet {
    const bet = this.betList.find(element =>{
      return element.id === id;
    })
    if (!bet){
      throw new Error("BET_ALREADY_EXIST");
    }
    return bet;
  }
  getBets(): Bet[] {
    return this.betList;
  }
  createBet(bet : Bet): Bet {
    const betExist = this.betList.find(element=>{
      return element.id === bet.id;
    })
      if (!betExist){
        this.betList.push(bet);
        return bet;
      }
      throw new Error("CANNOT_CREATE_BET");

    
  }
}
