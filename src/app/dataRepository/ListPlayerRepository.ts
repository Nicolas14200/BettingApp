import { Player, Position } from "../entities/Player";
import { playerRepositiory } from "../repositories/PlayerRepository";

export class ListPlayerRepository implements playerRepositiory {
  playerList: Player[] = [];
  getPlayer(id: string): Player   {
    const player = this.playerList.find(element=>{
      return element.id === id;
    })
    if (!player){
      throw new Error("PLAYER_ALREADY_EXIST");
    }
    return player;
  }
  getPlayers(): Player[]   {
      return this.playerList;
  }
  createPlayer(player: Player): Player {
    const playerExist = this.playerList.find(element=>{
      return element.id === player.id;
    })
      if (!playerExist){
        this.playerList.push(player);
        return player;
      }
      throw new Error("CANNOT_GET_PLAYER");

    
  }
}
