import { bot } from "./bot";

if (process.env.NODE_ENV !== "production") {
  bot.start();
}
