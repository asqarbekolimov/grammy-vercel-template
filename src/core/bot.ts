import { Bot } from "grammy";
import "dotenv/config";

const { BOT_TOKEN: token } = process.env;

export const bot = new Bot(token as string);
