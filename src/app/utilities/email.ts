import Mailjet, { Client } from "node-mailjet";
import dotenv from "dotenv";
dotenv.config();

export class MailJetObj {
  mailjet: Client = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC as string,
    process.env.MJ_APIKEY_PRIVATE as string,
    {
      config: {},
      options: {},
    }
  );
}