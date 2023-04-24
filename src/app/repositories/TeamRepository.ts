import { Coach } from "../entities/Coach";
import { Player } from "../entities/Player";
import { Team } from "../entities/Team";

export interface TeamRepository {
    getTeam(id: string): Team  ;
    getTeams():Team[];
    createTeam(team : Team ):Team ;
}