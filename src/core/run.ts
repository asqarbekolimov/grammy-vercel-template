import { bot } from "./bot";

if (process.env.MODE === "development") {
  bot.start();
}
