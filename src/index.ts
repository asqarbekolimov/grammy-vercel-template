import { Bot, Context } from "grammy";
import "dotenv/config";

const { BOT_TOKEN: token } = process.env;

export const bot = new Bot(token as string);

bot.command("start", async (ctx: Context) => {
  await ctx.reply(
    "Welcome to the <i>Grammyjs Vercel Template</i> bot! Bot was deployed on <b>Vercel</b>.",
    {
      parse_mode: "HTML",
    }
  );
});

bot.on("message", async (ctx: Context) => {
  await ctx.reply(`Hello! You sent a message: ${ctx?.message?.text}`);
});

if (process.env.MODE === "development") {
  bot.start();
}
