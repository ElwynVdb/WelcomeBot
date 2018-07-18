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

client.on("message", (message) => {


    var API = message.content.toUpperCase(); 
     
    let command = message.content.toUpperCase().split(" ")[0];
   
    let args = message.content.split(" ").slice(1);
    

    if (API == "+USERINFO") {
        if(!message.member.roles.some(r=>["DMU Staff", "SWD-Developer"].includes(r.name)) ) return;
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
                  }
              );
          } else {
          embed.addField("Username", `${user.username}#${user.discriminator}`, true)
              .addField("ID", `${user.id}`, true)
              .setColor(randomcolor())
              .setFooter(' ', ' ')
              .setThumbnail(`${user.avatarURL}`)
              .setTimestamp()
              .setURL(`${user.avatarURL}`)
              .addField('Currently', `${user.presence.status}`, true)
              .addField('Game', `${user.presence.game === null ? "No Game" : user.presence.game.name}`, true)
              .addField('Joined Discord', `${moment(user.createdAt).format('MM.DD.YY')}`, true)
              .addField('Is Bot', `${user.bot}`, true)
        message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
      }
    } else
  
      if (API == "+SERVERINFO ") {
        if(!message.member.roles.some(r=>["DMU Staff", "SWD-Developer"].includes(r.name)) )
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