import { User } from "./User";
import { UserRepository } from "./UserRepository";

export class UserDataBaseMap implements UserRepository<string, User> {
  UserMap: Map<string, User> = new Map();
  saveUser(user: User): void {
    let emailExist: boolean;
    emailExist = this.emailExist(user);
    if (!emailExist) {
      this.UserMap.set(user.id, user);
    }
  }
  loadUserById(id: string): User | void {
    const userExist = this.UserMap.get(id);
    if (userExist) {
      return userExist;
    }
  }
  getUsers(): Map<string, User> {
    return this.UserMap;
  }
  emailExist(user: User): boolean {
    let emailExist: string = "";
    console.log();
    this.UserMap.forEach((value, key, map) => {
      if (value.email == user.email) {
        emailExist = value.email;
      }
    });
    if (emailExist) {
      return true;
    }
    return false;
  }
  isEmail(email:string): boolean {
    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailFormat.test(email);
}
}
