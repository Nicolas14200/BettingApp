import { User } from "../entities/User";
import { UserRepository } from "./UserRepository";

export class DbUserRepository implements UserRepository<string, User>{
    
    saveUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    loadUserById(id: string): void | User {
        throw new Error("Method not implemented.");
    }
    getUsers(): Map<string, User> {
        throw new Error("Method not implemented.");
    }
}