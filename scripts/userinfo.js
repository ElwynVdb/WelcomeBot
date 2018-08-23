const Discord = require('discord.js');
const client = new Discord.Client();
const randomcolor = require('randomcolor');
const config = require("./config.json")
const moment = require('moment');
const fs = require('fs');




client.on("message", async message => {
    if(message.guild === null) return
    var guildid = message.guild.id
    const configa = require(`./configs/${guildid}.json`)
    if(message.content.indexOf(configa.prefix) !== 0) return;
    const args = message.content.slice(configa.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
 if(command === "userinfo") {
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
              .addField('Roles', `\`${message.member.roles.filter(r => r.name).size - 1}\``, true)
              .addField('Is Bot', `${message.author.bot}`, true)
              message.channel.sendEmbed(
                  embed, {
                      disableEveryone: true
                  })
    }  
}
})

client.login(config.token);