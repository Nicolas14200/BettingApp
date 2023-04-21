import { Team } from "../entities/Team";
import { PlaceBet } from "../entities/PlaceBet";

export class Bet {
    teamA: Team;
    teamB: Team;
    oddEven: number;
    constructor(teamA:Team, teamB: Team){
        this.teamA = teamA;
        this.teamB = teamB;
        this.oddEven = (this.teamA.odd + this.teamB.odd)/2;

    }
    betOnTeam(team: Team, betAmount: number):PlaceBet{
        const placeBet: PlaceBet = {
            team: team,
            amountOn: betAmount
        }
        return placeBet
    }
    loadGainVictory(odd: number, amount: number): number{
        return odd * amount;
    }
    loadGainEven(): number{
        return this.oddEven;
    }
    matchCanceled(amount: number){
        return amount;
    }
    checkExistingTeam(reqTeam: string, teamList:Team[]):Team | boolean{
        let getTeam: Team | boolean = false;
        for (let i=0 ; i<teamList.length ; i++){
            if (teamList[i].name === reqTeam){
                getTeam = teamList[i];
            }
        }
        if(getTeam){
            return getTeam;
        }
        return false;
        
    }
}