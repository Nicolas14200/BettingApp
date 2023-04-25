import { Person } from "./Person";

export enum Position{
    ATT = "attack",
    DEF = "defence",
    MID = "middle",
    GK = "goalkeeper"
}
export interface Player extends Person {
    position: Position;
}