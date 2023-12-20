const { Bot } = require('@botfather/telegram-bot');

const bot = new Bot({
  token: '6780865311:AAFYexE4dRHM1vujBvSXeRyHv8pcJ-JocgI',
});

bot.on('message', async (message) => {
  const date = new Date();
  const text = `La date d'aujourd'hui est ${date.toLocaleDateString()}.`;
  await bot.sendMessage(message.chat.id, text);
});

bot.start();
