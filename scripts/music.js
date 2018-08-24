const Discord = require('discord.js');
const client = new Discord.Client();
const Music = require('./musicmain.js');
const config = require('./config.json')

Music.start(client, {
  youtubeKey: config.youtubeapi
});

client.login(config.token);