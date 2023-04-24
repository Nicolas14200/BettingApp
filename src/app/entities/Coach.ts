import { Team } from "./Team";

export interface Coach {
    id: string;
    name: string;
    coachedTeams : Team[];
}