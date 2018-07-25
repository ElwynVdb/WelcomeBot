const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();
const { TOKEN, GOOGLE_API_KEY } = require('./config');

client.on("ready", () => {
    console.log('Music')
})
 
Music.start(client, {
  youtubeKey: 'GOOGLE_API_KEY'
});
 
client.login(TOKEN);