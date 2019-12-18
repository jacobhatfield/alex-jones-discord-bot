const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./auth.json');
const {
	insultChooser,
	conspiracyChooser,
	racistChooser,
	gayChooser,
	zanyChooser
} = require('./sound-bytes');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send(
		'1 Install = 1 Death to Globalist: https://discordapp.com/oauth2/authorize?&client_id=656615088601432077&scope=bot&permissions=36714496'
	);
});

let isReady = true;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.author == client.user) return;
	let mL = msg.content.toLowerCase();
	if (isReady && mL === `${prefix}conspiracy`) {
		isReady = false;
		let voiceChannel = msg.member.voice.channel;
		voiceChannel
			.join()
			.then(connection => {
				const dispatcher = connection.play(conspiracyChooser());
				dispatcher.on('end', end => {
					setTimeout(function() {
						voiceChannel.leave();
					}, 500);
					isReady = true;
				});
			})
			.catch(err => console.log(err));
	}
	if (isReady && mL === `${prefix}gay`) {
		isReady = false;
		let voiceChannel = msg.member.voice.channel;
		voiceChannel
			.join()
			.then(connection => {
				const dispatcher = connection.play(gayChooser());
				dispatcher.on('end', end => {
					setTimeout(function() {
						voiceChannel.leave();
					}, 500);
					isReady = true;
				});
			})
			.catch(err => console.log(err));
	}
	if (isReady && mL === `${prefix}insult`) {
		isReady = false;
		let voiceChannel = msg.member.voice.channel;
		voiceChannel
			.join()
			.then(connection => {
				const dispatcher = connection.play(insultChooser());
				dispatcher.on('end', end => {
					setTimeout(function() {
						voiceChannel.leave();
					}, 500);
					isReady = true;
				});
			})
			.catch(err => console.log(err));
	}
	if (isReady && mL === `${prefix}racist`) {
		isReady = false;
		let voiceChannel = msg.member.voice.channel;
		voiceChannel
			.join()
			.then(connection => {
				const dispatcher = connection.play(racistChooser());
				dispatcher.on('end', end => {
					setTimeout(function() {
						voiceChannel.leave();
					}, 500);
					isReady = true;
				});
			})
			.catch(err => console.log(err));
	}
	if (isReady && mL === `${prefix}zany`) {
		isReady = false;
		let voiceChannel = msg.member.voice.channel;
		voiceChannel
			.join()
			.then(connection => {
				const dispatcher = connection.play(zanyChooser());
				dispatcher.on('end', end => {
					setTimeout(function() {
						voiceChannel.leave();
					}, 500);
					isReady = true;
				});
			})
			.catch(err => console.log(err));
	}
});

client.login(token);

app.listen(process.env.PORT || 5000);
