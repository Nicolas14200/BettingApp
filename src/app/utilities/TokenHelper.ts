import dotenv from "dotenv";
import { User } from "../entities/User";
import jwt from "jsonwebtoken";
dotenv.config();
export class TokenHelper {
    jwt_key =  process.env.JWT_key as string;

    setToken (user: User){
        const token:string = jwt.sign({ user }, this.jwt_key);
        return token;
    }
    getIdFromToken(token: string){
        const decoded = jwt.verify(token, this.jwt_key) as jwt.JwtPayload; 
        return decoded.user.id;
    }
    verify(token: string){
        jwt.verify(token, this.jwt_key, (err: jwt.VerifyErrors, decoded:jwt.JwtPayload ) => {
            
    }
}