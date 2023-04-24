export enum bet {
    teamA = "1" ,
    teamB = "2",
    any = "1/2",
    even = "null"
}
export interface PlaceBet {
    match: number;
    betType: bet;//teamA | teamB | even | any
    amountOn: number;
}