import bcrypt, { genSalt, getRounds } from 'bcrypt'

export class BcryptHelper {
    async hashPassword(passwordToHash : string) : Promise<string>{
        return await  bcrypt.hash(passwordToHash , 10)
    }
    async comparePassword(password : string, passwordHash : string) : Promise<boolean>{
      return await bcrypt.compare(password, passwordHash);
       
    }
} 