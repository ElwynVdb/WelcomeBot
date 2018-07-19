const Discord = require('discord.js');
const client = new Discord.Client();
const yt = require('ytdl-core');
const randomcolor = require('randomcolor');
const ytdlcore = require('ytdl-core');
const config = require("./config.json")
const moment = require('moment');


client.on('ready', () => {
    console.log('Userinfo is ready!');
})

client.on("message", (message, msg) => {

    var messageText = message.content.toUpperCase(); 


    if (messageText == "+USERINFO") {
 var user = message.mentions.users.first();
      var embed = new Discord.RichEmbed();
      if (!user) {
          embed.addField("Username", `${message.author.username}#${message.author.discriminator}`, true)
              .addField("ID", `${message.author.id}`, true)
              .setColor(randomcolor())
              .setFooter(' ', ' ')
              .setThumbnail(`${message.author.avatarURL}`)
              .setTimestamp()
              .setURL(`${message.author.avatarURL}`)
              .addField('Currently', `${message.author.presence.status}`, true)
              .addField('Game', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
              .addField('Joined Discord', `${moment(message.author.createdAt).format('MM.DD.YY')}`, true)
              .addField('Joined Server', `${moment(message.member.joinedAt).format('MM.DD.YY')}`, true)
              .addField('Roles', `\`${message.member.roles.filter(r => r.name).size}\``, true)
              .addField('Is Bot', `${message.author.bot}`, true)
              message.channel.sendEmbed(
                  embed, {
                      disableEveryone: true
                  })
    }  
}
})

client.on('message', message => {
    if (message.author.id == "318821976372150272" || message.author.id == "338717002879336461") {
    switch(message.content.toLowerCase()) {
        case '-reboot':
            message.channel.sendMessage("Userinfo....");
            resetBot(message.channel);
            break;
      }
    }
  });

  // Turn bot off (destroy), then turn it back on
  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
  }


client.login(config.token);