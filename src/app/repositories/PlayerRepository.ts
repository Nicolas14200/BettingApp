import { Player, Position } from "../entities/Player";

export interface PlayerRepository {
    getPlayer(id: string):Player;
    getPlayers():Player[];
    createPlayer(player: Player): Player;
    getPlayerByTeamId(id: string): Player[]
}