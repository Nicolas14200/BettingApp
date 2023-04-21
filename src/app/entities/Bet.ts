export class Bet {
    betAmount: number;
    teamA: string;
    teamB: string;
    constructor(betAmount: number, teamA: string, teamB: string){
        this.betAmount = betAmount;
        this.teamA = teamA;
        this.teamB = teamB;
    }
    betOnTeam(team: string){
        if(team == this.teamA){
            
        }
        if(team == this.teamB){
            
        }
    }
}