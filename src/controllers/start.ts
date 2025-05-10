import { Context } from "grammy";

const startController = async (ctx: Context) => {
  await ctx.reply(
    "Welcome to the <i>Grammyjs Vercel Template</i> bot! Bot was deployed on <b>Vercel</b>.",
    { parse_mode: "HTML" }
  );
};

export { startController };
