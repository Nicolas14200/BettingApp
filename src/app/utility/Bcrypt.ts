import bcrypt from "bcrypt";
export class Bcrypt {
  saltRounds: number = 10;
  hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }
  comparePassword(pass:string, hash:string):boolean{
    return bcrypt.compareSync(pass, hash); 
  }
}
