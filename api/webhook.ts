import { webhookCallback } from "grammy";
import { bot } from "../src/core/bot";

// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, "http");
