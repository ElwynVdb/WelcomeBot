const Discord = require('discord.js');
const client = new Discord.Client();
const randomcolor = require('randomcolor');
const config = require("./config.json")
const moment = require('moment');
const fs = require('fs');


client.on('ready', () => {
 console.log('ready user/server info')
})

client.on("message", async message => {
    if(message.guild === null) return
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
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
              .addField('Joined Discord', `${moment(message.author.createdAt).format('DD.MM.YY')}`, true)
              .addField('Joined Server', `${moment(message.member.joinedAt).format('DD.MM.YY')}`, true)
              .addField('Roles', `\`${message.member.roles.filter(r => r.name).size - 1}\``, true)
              .addField('Is Bot', `${message.author.bot}`, true)
              message.channel.sendEmbed(
                  embed, {
                      disableEveryone: true
 })
   }else
        {
         embed.addField("Username", `${user.username}#${user.discriminator}`, true)
             .addField("ID", `${user.id}`, true)
             .setColor(randomcolor())
             .setFooter(' ', ' ')
             .setThumbnail(`${user.avatarURL}`)
             .setTimestamp()
             .setURL(`${user.avatarURL}`)
             .addField('Currently', `${user.presence.status}`, true)
             .addField('Game', `${user.presence.game === null ? "No Game" : user.presence.game.name}`, true)
             .addField('Joined Discord', `${moment(user.createdAt).format('DD.MM.YY')}`, true)
             .addField('Is Bot', `${user.bot}`, true)
             message.channel.sendEmbed(
                 embed, {
                     disableEveryone: true
     });
    }  
  }
  if(command === "serverinfo") {

    var embed = new Discord.RichEmbed();
    embed.addField("Server Name", `${message.guild.name}`, true)
        .addField("Server ID", `${message.guild.id}`, true)
        .setColor(randomcolor())
        .setFooter(' ', ' ')
        if (message.guild.iconURL) embed.setThumbnail(`${message.guild.iconURL}`);
        if (message.author.avatarURL) embed.setURL(`${message.author.avatarURL}`);
    embed.setTimestamp()
        .addField('Guild Owner', `${message.guild.owner.user.username}`, true)
        .addField('Owner ID', `${message.guild.owner.id}`, true)
        .addField('Guild Created', `${moment(message.guild.createdAt).format('MM.DD.YY')}`, true)
        .addField('Roles', `${message.guild.roles.filter(r => r.name).size}`, true)
        .addField('Verification Level', `${message.guild.verificationLevel}`, true)
        .addField('Region', `${message.guild.region}`, true)
    message.channel.sendEmbed(
        embed, {
            disableEveryone: true
        }
    );
} 
})

client.login(config.token);