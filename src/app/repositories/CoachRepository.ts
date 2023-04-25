import { Coach } from "../entities/Coach";
import { Team } from "../entities/Team";

export interface CoachRepository {
    getCoach(id: string): Coach  ;
    getCoachs(): Coach[]  ;
    createCoach(coach: Coach): Coach  ;
}