const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();
const config = require('./config.json')

Music.start(client, {
  youtubeKey: config.youtubeapi
});

client.login(config.token);