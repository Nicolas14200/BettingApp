import { Router, Request, Response } from "express";
import { ListPlayerRepository } from "../dataRepository/ListPlayerRepository";
import { v4 } from 'uuid';
import { Player, Position } from "../entities/Player";
const playerRouter: Router = Router();

const listPlayerRepository : ListPlayerRepository = new ListPlayerRepository()
playerRouter.get('/player', (req: Request, res: Response)=>{
    const player:  void | Player = listPlayerRepository.getPlayer(req.body.id);
    if (player){
        return res.status(200).send(player);
    }
    return res.status(400).send("PLAYER_DON'T_EXIST");
    
})
playerRouter.get('/players', (req: Request, res: Response)=>{
    const players = listPlayerRepository.getPlayers();
    return res.status(200).send(players);
})
playerRouter.post('/player/create', (req: Request, res: Response)=>{
    const player: Player = {
        id : v4(),
        name: req.body.name,
        position: Position.ATT,
    }
    const playerExist = listPlayerRepository.createPlayer(player);
    if (!player){
        return res.status(200).send(playerExist);
    }
    return res.status(400).send("PLAYER_DON'T_EXIST");
})
export default playerRouter