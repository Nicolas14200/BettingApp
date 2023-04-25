import { Router, Request, Response } from "express";
import { ListTeamRepository } from "../dataRepository/ListTeamRepository";
import { Team } from "../entities/Team";
import { Coach } from "../entities/Coach";
import  {ListCoachRepository}  from "../dataRepository/ListCoachRepository";
import { v4 } from 'uuid';
import { Player } from "../entities/Player";
const teamRouter: Router = Router();
const listTeamRepository: ListTeamRepository = new ListTeamRepository()
const listCoachRepository: ListCoachRepository = new ListCoachRepository();
teamRouter.post("/team/create", (req: Request, res: Response)=>{
    const coachId = req.body.coachId;
    const coach = listCoachRepository.getCoach(coachId);
    const team: Team = {
        id : v4(),
        name: req.body.name,
        players: [],
        coach: coach,
        country: req.body.country
    }
    listTeamRepository.createTeam(team);
    return res.status(200).send(team);
})
teamRouter.get("/team"), (req: Request, res: Response) => {
    const teamId = req.body.id;
    const team: Team = listTeamRepository.getTeam(teamId);
    if (team) {
        return res.status(200).send(team);
    }
    res.status(400).send("TEAM_NOT_EXIST");
}
teamRouter.get("/teams"), (req: Request, res: Response) => {
    const teamList = listTeamRepository.getTeams()
    return res.status(200).send(teamList);
}
export default teamRouter