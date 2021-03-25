const Discord = require('discord.js');
const Trivia = require('./trivia.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
	Trivia.getTriviaQuestion();
});

client.login();

client.on('message', message => {
	console.log(message.content);
});
