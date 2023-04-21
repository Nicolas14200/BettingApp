import { User } from "../entities/User";

export function verifyEmail(email: string): boolean {
    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailFormat.test(email);
  }
export function verifyEmailExist(user: User, UserMap:  Map<string, User>): boolean {
    let emailExist: string = "";
    UserMap.forEach((value, key, map) => {
      if (value.email == user.email) {
        emailExist = value.email;
      }
    });
    if (emailExist) {
      return true;
    }
    return false;
  }