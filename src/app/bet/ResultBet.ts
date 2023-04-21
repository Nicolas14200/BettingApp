import { PlaceBet } from "../entities/PlaceBet";
import { Team } from "../entities/Team";

export class ResultBet {
    oddEven: number;// null
    oddTeamA: number;// 1 
    oddTeamB: number;// 2 
    oddAny: number;// 1/2 
    teamA: any;
    teamB: any;
    matchCancel: boolean = false; 
    constructor(teamA:Team, teamB: Team){
        this.teamA = teamA;
        this.teamB = teamB;
        this.oddEven = (this.teamA.odd + this.teamB.odd)/2;
        this.oddTeamA = teamA.odd;
        this.oddTeamB = teamB.odd;
        this.oddAny = 1.2;
    }
    result(placeBet: PlaceBet, winType:string): number{
        if (!this.matchCancel){
            if(placeBet.betType === "teamA" && winType == "teamA"){
                return this.loadGainVictory(this.oddTeamA,placeBet.amountOn)
            }
            if(placeBet.betType === "teamB" && winType == "teamB"){
                return this.loadGainVictory(this.oddTeamB,placeBet.amountOn)
            }
            if(placeBet.betType === "any"  && winType == "any"){
                return this.loadGainVictory(this.oddAny,placeBet.amountOn)
            }
            if(placeBet.betType === "even"  && winType == "even"){
                return this.loadGainVictory(this.oddEven,placeBet.amountOn)
            }
            return 0;
        }
        return placeBet.amountOn;
    }
    loadGainVictory(odd: number, amount: number): number{
        return odd * amount;
    }
    matchCanceled(amount: number) {
        this.matchCancel = true;
        return amount;
      }
}