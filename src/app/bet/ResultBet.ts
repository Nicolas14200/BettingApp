import { PlaceBet } from "../entities/PlaceBet";
import { Team } from "../entities/Team";

export class ResultBet {
  oddTeamA: number = 1; // 1
  oddTeamB: number = 1; // 2
  oddAny: number = 1; // 1/2
  oddEven: number = 1; // null
  teamA: any;
  teamB: any;

  constructor(teamA: Team, teamB: Team) {
    this.teamA = teamA;
    this.teamB = teamB;
    this.oddAny = 1.2;
    this.oddCalculationEven();
    this.oddCalculationteamA();
    this.oddCalculationteamB();
  }
  changeTeam(teamA: Team, teamB:Team): void{
    this.teamA = teamA;
    this.teamB = teamB;
  }
  oddCalculationEven(): number {
    return this.oddEven = (this.teamA.odd + this.teamB.odd) / 2;
  }
  oddCalculationteamA(): number{
   return this.oddTeamA = this.teamA.odd;
  }
  oddCalculationteamB(): number{
    return this.oddTeamB = this.teamB.odd;
   }

  result(placeBet: PlaceBet, winType: string): number {
    if (placeBet.betType === "teamA" && winType == "teamA") {
      return this.loadGainVictory(this.oddTeamA, placeBet.amountOn);
    }
    if (placeBet.betType === "teamB" && winType == "teamB") {
      return this.loadGainVictory(this.oddTeamB, placeBet.amountOn);
    }
    if (placeBet.betType === "any" && winType == "any") {
      return this.loadGainVictory(this.oddAny, placeBet.amountOn);
    }
    if (placeBet.betType === "even" && winType == "even") {
      return this.loadGainVictory(this.oddEven, placeBet.amountOn);
    }
    return 0;
  }
  loadGainVictory(odd: number, amount: number): number {
    return odd * amount;
  }
}
