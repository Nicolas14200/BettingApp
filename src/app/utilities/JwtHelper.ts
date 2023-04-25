import { error } from 'console';
import dotenv from 'dotenv';
dotenv.config()
import jwt, { Secret } from 'jsonwebtoken'
export class JwtHelper {
    secret: jwt.Secret = process.env.SECRET_KEY || "secret";
    createToken (param1 : string, param2 : string ) : string {
         return jwt.sign({ param1, param2 },this.secret )
    }
    verifyToken (token : string){
         return jwt.verify(token, this.secret)
    }
}


