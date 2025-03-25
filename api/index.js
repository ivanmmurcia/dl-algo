const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN_BOT;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const response = `Hola, ${msg.from.first_name}!`;

  bot.sendMessage(chatId, response);
});