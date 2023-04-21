import bcrypt from "bcrypt";
export class BcryptHelper {
  saltRounds: number = 10;
  hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }
  comparePassword(pass:string, hash:string):boolean{
    return bcrypt.compareSync(pass, hash); 
  }
  async gentSalt(saltRounds: number): Promise<string> {
    return await bcrypt.genSalt(saltRounds)
  }
  async hashPasswordAsync(passwordToHash: string) : Promise<string>{
    return await bcrypt.hash(passwordToHash, this.saltRounds)
  }

}
