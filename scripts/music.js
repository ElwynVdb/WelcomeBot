const Discord = require('discord.js');
const Music = require("./musiccmd.js");
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () => {
    console.log('Music ready')
})

Music.start(client, config, {
  youtubeKey: ''
});

client.login(config.token);