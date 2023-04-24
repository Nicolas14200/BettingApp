export enum Position{
    ATT = "attaque",
    DEF = "defence",
    MID = "middle"
}
export interface Player {
    id: string;
    name: string;
    position: Position;
}