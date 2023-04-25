import { Coach } from "../entities/Coach";

export interface CoachRepository {
    getCoach(id: string): Coach  ;
    getCoachs(): Coach[]  ;
    createCoach(coach: Coach): Coach  ;
}