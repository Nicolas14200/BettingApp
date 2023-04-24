import { PlaceBet } from "../entities/PlaceBet";
import { BetRepository } from "../repositories/BetRepository";

export class MapBetRepository implements BetRepository {
  mapBet: Map<string, PlaceBet[]> = new Map();
 
  setBet(reqUser: string, bet: PlaceBet):void {
    const userListPlaceBet = this.mapBet.get(reqUser);
    if (!userListPlaceBet){
      const arrPlaceBet: PlaceBet[] = [];
      arrPlaceBet.push(bet);
      this.mapBet.set(reqUser, arrPlaceBet);
    }else{
      userListPlaceBet.push(bet);
      this.mapBet.set(reqUser, userListPlaceBet);
    }
  }
  getBet(user: string): PlaceBet[] {
    return this.mapBet.get(user) as PlaceBet[];
  }
}
