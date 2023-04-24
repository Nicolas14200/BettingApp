import { Team } from "../entities/Team";
import { TeamRepository } from "../repositories/TeamRepository";

export class ListTeamRepository implements TeamRepository {
    teamList: Team[] = [];

    getTeam(id: string): Team {
       const team = this.teamList.find(element =>{
        return element.id === id;
       })
       if (!team){
        throw new Error("cannot_get_team")
       }
       return team; 
    }

    getTeams(): Team[] {
        return this.teamList;
    }
    createTeam(team : Team ): Team   {
        let teamExist: boolean = false;
        let team: Team = {
            id : id,
            name: name,
            players: players,
            coach: coach,
            country: country,
        };
        this.teamList.forEach(element => {
            if(element.id == team.id ){
                teamExist= true;
            }
        })
        if (!teamExist){
            return team;
        }
    }
    
}