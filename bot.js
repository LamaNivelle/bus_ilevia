const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot({
  token: "6780865311:AAFYexE4dRHM1vujBvSXeRyHv8pcJ-JocgI",
});

bot.on("message", async (message) => {
  const date = new Date();
  const messageText = `La date d'aujourd'hui est le ${date.toLocaleDateString()}.`;

  bot.sendMessage(message.chat.id, messageText);
});
