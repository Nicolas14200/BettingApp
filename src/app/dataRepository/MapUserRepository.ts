import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";
import { verifyEmailExist, verifyEmail } from "../utilities/FunctUtils"
export class MapUserRepository implements UserRepository<string, User> {
  UserMap: Map<string, User> = new Map();
  saveUser(user: User): void {
    if (verifyEmail(user.email)) {
      let emailExist: boolean;
      emailExist = verifyEmailExist(user, this.UserMap);
      if (!emailExist) {
        this.UserMap.set(user.id, user);
      }
    }
  }
  loadUserById(id: string): User{
    const userExist = this.UserMap.get(id);
    if (!userExist) {
      throw new Error("CANNOT_GET_USER")
    }
    return userExist;
  }
  getUsers(): Map<string, User> {
    return this.UserMap;
  }
}
