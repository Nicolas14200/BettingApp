import { Match } from "../entities/Match";
import { Team } from "../entities/Team";
import { MatchRepository } from "../repositories/MatchRepository";

export class ListMatchRepository implements MatchRepository {
    matchList: Match[] = []
    getMatch(matchId: string): Match {
        let match: Match
        this.matchList.forEach(element => {
            if (element.matchId === matchId) {
                return match = element
            };
        })
        throw new Error("Cannot_create_match")
    }

    getMatchs(): Match[]   {
        return this.matchList;
    }
    createMatch(match : Match): Match {
        let matchExist: boolean = false;
        this.matchList.forEach(element => {
            if (element.matchId === teamA.name + teamB.name + dateMatch) {
                matchExist == true;
            };
        })
        if (!matchExist) {
            const match: Match = {
                teamA: teamA,
                teamB: teamB,
                matchId: matchId
                dateMatch: new,
            }
            this.matchList.push(match);
            return match;
        }
        throw new Error("Cannot_create_match")
    }
} 