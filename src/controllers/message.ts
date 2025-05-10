import { Context } from "grammy";

const messageController = async (ctx: Context) => {
  await ctx.reply(`Hello! You sent a message: ${ctx?.message?.text}`);
};
export { messageController };
