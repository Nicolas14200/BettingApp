import { BetType } from "./Bet";
import { Match } from "./Match";

export enum bet {
    teamA = "1" ,
    teamB = "2",
    any = "1/2",
    even = "null"
}
export interface PlaceBet {
    match: Match;
    bet: BetType;//teamA | teamB | even | any
    amountOn: number;
}