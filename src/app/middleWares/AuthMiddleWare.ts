import { Router, Request, Response, NextFunction } from "express";
import { JwtHelper } from "../utilities/JwtHelper";
const authMiddleWare = Router();
authMiddleWare.use((req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.auth_key as string;
  const jwtHelper = new JwtHelper
  if (!token){
    return res.status(400).send("Token is missing")
  }
  try{
    const decodedToken = jwtHelper.verifyToken(token);
    
    next()

  }catch(error){
    res.status(400).send("Something wrong, invalid auth ")
  }

});
export default authMiddleWare