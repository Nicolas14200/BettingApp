import { Person } from "./Person";
import { Team } from "./Team";

export enum Position{
    ATT = "attack",
    DEF = "defence",
    MID = "middle",
    GK = "goalkeeper"
}
export interface Player extends Person {
    teamId : string;
    position: Position;
}