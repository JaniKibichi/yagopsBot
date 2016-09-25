'use strict';

var TelegramBot = require('node-telegram-bot-api');
var token = 'Telegram_Bot_Token';

var options = {
	polling: true
};
var token = process.env.Telegram_Bot_Token || 'Telegram_Bot_Token';
var bot = new TelegramBot(token, options);

bot.getMe().then(function(me){
	console.log('Hi my name is %s!', me.username);
});

/* matches /photo */
bot.onText(/\/photo/, function(message){
	var chatId = message.chat.id;
	var photo = __dirname+'/../test/bot.gif';/*get photo from file */
	bot.sendPhoto(chatId, photo, {caption:"I'm a bot!"});
});

/* matches audio */
bot.onText(/\/audio/, function(message){
	var chatId = message.chat.id;
	var url = 'https://upload.wikimedia.org/example.ogg'; /*from HTTP request */
	var audio = request(url);
	bot.sendAudio(chatId, audio)
	  .then(function(resp){
	  	var messageId = resp.message_id;
	  	bot.forwardMessage(chatId, chatId, message_id);
	  });
});

/* matches love */
bot.onText(/\/love/, function(message){
	var chatId = message.chat.id;
	var opts = {
		reply_to_message_id: message.message_id;
		reply_markup: JSON.stringify({
			keyboard:[
			['Yes, you are the bot of my life'],
			['No, sorry there is another one...']]
		})
	};
});

bot.onText(/\/echo (.+)/, function(message, match){
	var chatId = message.chat.id;
	var resp = match[1];
	bot.sendMessage(chatId, resp);
});









/* set up polling */
var bot = new TelegramBot(token, {polling: true});

/* match /echo [whatever] */
bot.onText(/\/echo (.+)/, function (message, match) {
	var fromId = message.from.id;
	var resp = match[1];
	bo.sendMessage(fromId, resp);
});

bot.on('message', function(message){
	var chatId = message.chat.id;
	var photo = 'cats.png';
	bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
});