const ytdl = require('ytdl-core');
const Discord  = require('discord.js');
const client = new Discord.Client
const config = require("./config.json")
const streamOptions = { seek: 0, volume: 1 };

client.on("ready", () => {
    console.log('ready music')
})
client.on("message", (message) => {
    if (message.content === '!play') {
        // Note that this will only work if the message was sent in a guild
        // and the author is actually in a voice channel.
        // You might want to check for all that stuff first
        const voiceChannel = message.member.voiceChannel;

    voiceChannel.join()
    .then(connection => {
      const stream = ytdl('https://www.youtube.com/watch?v=XAWgeLF9EVQ', { filter : 'audioonly' });
      const dispatcher = connection.playStream(stream, streamOptions);
    })
    .catch(console.error);
  
    
}
})

client.login(config.token); 