import { Player, Position } from "../entities/Player";
import { PlayerRepository } from "../repositories/PlayerRepository";

export class ListPlayerRepository implements PlayerRepository {
  playerList: Player[] = [];
  getPlayer(id: string): Player   {
    const player = this.playerList.find(element=>{
      return element.id === id;
    })
    if (!player){
      throw new Error("PLAYER_ALREADY_EXISTS");
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
      throw new Error("CANNOT_CREATE_PLAYER");
  }
  getPlayerByTeamId(teamId: string): Player[]{
    return this.playerList.filter(player=>{
      return player.teamId === teamId;
    })
  }
}
