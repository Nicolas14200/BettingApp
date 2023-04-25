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
        const teamExist = this.teamList.find(element=>{
            return element.id === team.id;
        });
        
        if (!teamExist){
            this.teamList.push(teamExist)
            return teamExist;
        }
        throw new Error("player_already_exist");
    }
    
}