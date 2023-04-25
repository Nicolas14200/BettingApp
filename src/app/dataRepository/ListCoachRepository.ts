import { Coach } from "../entities/Coach";
import { CoachRepository } from "../repositories/CoachRepository";

export class ListCoachRepository implements CoachRepository {
  coachList: Coach[] = [];
  getCoach(id: string): Coach {
    const coach = this.coachList.find((element) => {
      return element.id === id;
    });
    if (!coach) {
      throw new Error("COACH_ALREADY_EXIST");
    }
    return coach;
  }
  getCoachs(): Coach[] {
    return this.coachList;
  }
  createCoach(coach: Coach): Coach {
    const coachExist = this.coachList.find((element) => {
      return element.id === coach.id;
    });
    if (!coachExist) {
      this.coachList.push(coach);
      return coach;
    }
    throw new Error("COACH_ALREADY_EXIST");
  }
}
