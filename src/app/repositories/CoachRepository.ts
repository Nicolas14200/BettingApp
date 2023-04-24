import { Coach } from "../entities/Coach";
import { Team } from "../entities/Team";

export interface CoachRepository {
    getCoach(id: string): Coach  ;
    getCoachs(): Coach[]  ;
    createCoach(id: string, name: string, coachedTeams: Team[]): Coach  ;
}