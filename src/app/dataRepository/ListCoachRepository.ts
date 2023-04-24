import { Coach } from "../entities/Coach";
import { Team } from "../entities/Team";
import { CoachRepository } from "../repositories/CoachRepository";

export class ListCoachRepository implements CoachRepository {
    coachList: Coach[] = [];
    getCoach(id: string): Coach   {
        let Coach: Coach;
        this.coachList.forEach((element) => {
            if (element.id === id) {
                return (Coach = element);
            }
        });
    }
    getCoachs(): Coach[]   {
        return this.coachList;
    }
    createCoach(id: string, name: string, coachedTeams: Team[]): Coach   {
        let coachExist: boolean = false;
        this.coachList.forEach((element) => {
            if (element.id === id) {
                coachExist == true;
            }
        });
        if (!coachExist) {
            const coach: Coach = {
                id: Math.random().toString(16).slice(2),
                name: name,
                coachedTeams: [],
            };
            this.coachList.push(coach);
            return coach;
        }
    }
}
