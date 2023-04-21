import { Team } from "../entities/Team";
import { PlaceBet } from "../entities/PlaceBet";

export class SaveBet {
  teamA: Team;
  teamB: Team;

  constructor(teamA: Team, teamB: Team) {
    this.teamA = teamA;
    this.teamB = teamB;
  }

  betOnTeam(betType: string, betAmount: number): PlaceBet {
    const placeBet: PlaceBet = {
      betType: betType, // teamA | teamB | any | even
      amountOn: betAmount,
    };
    return placeBet;
  }

  matchCanceled(amount: number) {
    return amount;
  }
  checkExistingTeam(reqTeam: string, teamList: Team[]): Team | boolean {
    let getTeam: Team | boolean = false;
    for (let i = 0; i < teamList.length; i++) {
      if (teamList[i].name === reqTeam) {
        getTeam = teamList[i];
      }
    }
    if (getTeam) {
      return getTeam;
    }
    return false;
  }
}
