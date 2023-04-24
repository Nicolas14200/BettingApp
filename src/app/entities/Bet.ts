import { Match } from "./Match";

export enum BetType {
    teamA = "1" ,
    teamB = "2",
    any = "1/2",
    even = "null"
}
export interface Bet {
    userId: string;
    betId : string;
    betType : BetType;
    amount :number;
    currency: string;
    match :Match;
    creationDate: Date;
    limitDate: Date;
}