const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();

client.on("ready", () => {
    console.log('Music')
})
 
Music.start(client, {
  youtubeKey: 'AIzaSyA_03wOYbGpvWDLLsjTlSfvhXw7iPikLzY'
});
 
client.login("NDY5MDk0Mzc5OTMyNDgzNTg0.DjH_pw.TnATT_51y0V32PZK0RhD11-ZYJQ");