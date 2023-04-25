import { Match } from "../entities/Match";
import { Team } from "../entities/Team";

export interface MatchRepository {
    getMatch(matchId: string): Match;
    getMatchs(): Match[];
    createMatch(match : Match): Match;
}