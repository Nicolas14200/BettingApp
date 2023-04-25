import { Router, Request, Response } from "express";
import { ListTeamRepository } from "../dataRepository/ListTeamRepository";
import { Team } from "../entities/Team";
import { Coach } from "../entities/Coach";
import  {ListCoachRepository}  from "../dataRepository/ListCoachRepository";
import { v4 } from 'uuid';
import { Player } from "../entities/Player";
const teamRouter: Router = Router();
const listTeamRepository: ListTeamRepository = new ListTeamRepository()
teamRouter.post("/team/create", (req: Request, res: Response)=>{
    const coachList: Coach[] = ListCoachRepository.
    const id = v4();
    const name = req.body.name;
    const players: Player[] = [];
    const coach : Coach = req.body.coachname;
    const country = req.body.country;
    const team = listTeamRepository.createTeam(id, name, players, coach, country);
    if (!team) {

    }
})
teamRouter.get("/team"), (req: Request, res: Response) => {
    const team: void | Team = listTeamRepository.getTeam(req.body.id);
    if (team) {
        return res.status(200).send(team);
    }
    res.status(400).send("Team doesn't exist");
}
teamRouter.get("/teams"), (req: Request, res: Response) => {
    const teamList = listTeamRepository.getTeams()
    return res.status(200).send(teamList);
}

export default teamRouter