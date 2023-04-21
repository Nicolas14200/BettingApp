import { Router, Request, Response } from "express";
import { Bet } from "../bet/Bet";
import { Team } from "../entities/Team";

const betRouter: Router = Router();
const teamList: Team[] = [];
const teamA: Team = {
    name: "HSC",
    odd: 150,
}
const teamB: Team = {
    name: "MHSC",
    odd: 1.1,
}
teamList.push(teamA, teamB);

betRouter.post("/",(req: Request, res: Response)=>{
    const bet = new Bet(teamA, teamB);
    const choice = req.body.team;
    const amount = req.body.amount;
    const teamExist = bet.checkExistingTeam(choice, teamList);
    if (teamExist){
       const placeBet = bet.betOnTeam(teamExist as Team, amount); 
    }
    
    return res.status(200).json({
        team :choice,
        amount: amount
     });
})

export default betRouter;