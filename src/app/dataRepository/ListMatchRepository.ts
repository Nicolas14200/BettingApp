import { Match } from "../entities/Match";
import { Team } from "../entities/Team";
import { MatchRepository } from "../repositories/MatchRepository";

export class ListMatchRepository implements MatchRepository {
    matchList: Match[] = [];
    getMatch(id: string): Match {
        const match = this.matchList.find(element => {
                return element.id === id
            });
        if (!match){
            throw new Error("CANNOT_GET_MATCH")
        }
        return match;
    }    
    getMatchs(): Match[] {
        return this.matchList;
    }
    createMatch(match : Match): Match {
        const matchExist = this.matchList.find(element => {
            return element.id === match.id;
        });
        if (!matchExist) {
            this.matchList.push(match);
            return match;
        }
        throw new Error("CANNOT_CREATE_MATCH")
    }
} 