import { Player, Position } from "../entities/Player";

export interface playerRepositiory {
    getPlayer(id: string):Player  ;
    getPlayers():Player[]  ;
    createPlayer(id: string, name: string, position: Position): Player  ;
}