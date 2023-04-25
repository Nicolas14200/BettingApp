import { Player, Position } from "../entities/Player";

export interface playerRepositiory {
    getPlayer(id: string):Player  ;
    getPlayers():Player[]  ;
    createPlayer(player: Player): Player  ;
}