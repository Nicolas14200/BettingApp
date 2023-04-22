import { PlaceBet } from "../entities/PlaceBet";

export interface BetRepository {
    setBet(user:string, bet:PlaceBet): void;
    getBet(user:string): PlaceBet[];
} 