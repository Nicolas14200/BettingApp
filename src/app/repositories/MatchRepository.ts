import { Match } from "../entities/Match";
import { Team } from "../entities/Team";

export interface MatchRepository {
    getMatch(id: string): Match;
    getMatchs(): Match[];
    createMatch(match : Match): Match;
}