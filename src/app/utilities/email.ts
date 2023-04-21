import Mailjet, { Client } from "node-mailjet";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

export class MAilJetObj {
  mailjet: Client = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC as string,
    process.env.MJ_APIKEY_PRIVATE as string,
    {
      config: {},
      options: {},
    }
  );
}
