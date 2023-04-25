import { Team } from "./Team";

export interface Match {
    teamA : Team;
    teamB: Team;
    matchId: string;
    dateMatch: Date;
}