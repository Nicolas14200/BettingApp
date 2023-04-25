import { Person } from "./Person";
import { Team } from "./Team";

export interface Coach extends Person {
    teamId : string;
    coachedTeams : Team[];
}