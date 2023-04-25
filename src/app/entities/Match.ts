import { Team } from "./Team";

export interface Match {
    teamA : Team;
    teamB: Team;
    id: string;
    dateMatch: Date;
}