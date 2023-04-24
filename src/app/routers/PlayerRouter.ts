import { Router, Request, Response } from "express";
import { ListPlayerRepository } from "../dataRepository/listPlayerRepository";
import { v4 } from 'uuid';
import { Player } from "../entities/Player";
const playerRouter: Router = Router();

const listPlayerRepository : ListPlayerRepository = new ListPlayerRepository()
playerRouter.get('/player', (req: Request, res: Response)=>{
    const player:  void | Player = listPlayerRepository.getPlayer(req.body.id);
    if (player){
        return res.status(200).send(player);
    }
    return res.status(400).send("player don't exist");
    
})
playerRouter.get('/players', (req: Request, res: Response)=>{
    const players = listPlayerRepository.getPlayers();
    return res.status(200).send(players);
})
playerRouter.get('/player/create', (req: Request, res: Response)=>{
    const id = req.body.id;
    const name = req.body.name;
    const position = req.body.position;
    const player = listPlayerRepository.createPlayer(id, name, position);
    if (player){
        return res.status(200).send(player);
    }
    return res.status(400).send("player already exist");
})
export default playerRouter