import { Player, Position } from "../entities/Player";
import { playerRepositiory } from "../repositories/PlayerRepository";

export class ListPlayerRepository implements playerRepositiory {
  playerList: Player[] = [];
  getPlayer(id: string): Player   {
    let player: Player | undefined = undefined;
    this.playerList.forEach((element) => {
      if (element.id === id) {
        player = element;
      }
    });
    if (player) {
      return player;
    }
  }
  getPlayers(): Player[]   {
    if (this.playerList.length != 0) {
      return this.playerList;
    }
  }
  createPlayer(id: string, name: string, position: Position): Player   {
    let playerExist: boolean = false;
    this.playerList.forEach((element) => {
      if (element.id === id) {
        playerExist = true;
      }
    });
    if (!playerExist) {
      const player: Player = {
        id: Math.random().toString(16).slice(2),
        name: name,
        position: position,
      };
      this.playerList.push(player);
      return player;
    }
  }
}
