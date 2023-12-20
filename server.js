const telegraf = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new telegraf.Bot({
  token: process.env.BOT_TOKEN,
});

bot.on('message', async (ctx) => {
  const date = new Date();

  ctx.reply(`La date d'aujourd'hui est le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}.`);
});

bot.start();
