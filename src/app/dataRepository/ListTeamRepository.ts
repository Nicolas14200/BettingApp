import { Coach } from "../entities/Coach";
import { Player } from "../entities/Player";
import { Team } from "../entities/Team";
import { TeamRepository } from "../repositories/TeamRepository";
import { ListPlayerRepository } from "./ListPlayerRepository";

export class ListTeamRepository implements TeamRepository {
  teamList: Team[] = [];

  createTeam(team: Team): Team {
    const teamExist = this.teamList.find((element) => {
      return element.id === team.id;
    });
    if (!teamExist) {
        this.teamList.push(team);
        return team;
    }
    throw new Error("TEAM_ALREADY_EXISTS");
  }

  getTeam(id: string): Team {
    const team = this.teamList.find((element) => {
      return element.id === id;
    });
    if (!team) {
      throw new Error("CANNOT_GET_TEAM");
    }
    return team;
  }

  getTeams(): Team[] {
    return this.teamList;
  }

}
