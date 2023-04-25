import { ResultBet } from "../bet/ResultBet";
import { Bet } from "../entities/Bet";
import { Position } from "../entities/Player";
import { User } from "../entities/User";

export function verifyEmail(email: string): boolean {
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return emailFormat.test(email);
}

export function verifyEmailExist(
  user: User,
  UserMap: Map<string, User>
): boolean {
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

export function victoryCounter(
  Bet: Bet[],
  resultBet: ResultBet,
  winType: string
  ) {
  const victory: number[] = [];
  for (let i = 0; i < Bet.length; i++) {
    const win: number = resultBet.result(Bet[i], winType);
    if (win) {
      victory.push(win);
    } else {
      victory.push(0);
    }
  }
  return victory;
}

export function positionChoice(position:string):Position {
  if (position === 'attack'){
    return Position.ATT;
  }
  if (position === 'defence'){
    return Position.DEF;
  }
  if (position === 'middle'){
    return Position.MID;
  }
  if (position === 'goalkeeper'){
    return Position.GK;
  }
  throw new Error("CANNOT_CREATE_PLAYER")
}