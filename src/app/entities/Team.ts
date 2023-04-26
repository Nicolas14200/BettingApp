import { Coach } from "./Coach";
import { Player } from "./Player";

export interface Team {
    id : string;
    name: string;
    players: Player[];
    coach: Coach[];
    country: string;
}