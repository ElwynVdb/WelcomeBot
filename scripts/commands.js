const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");

client.on('ready', () => {
    console.log('Commands are ready');
})

client.on('message', (message) => {
   if (message.author === client.user) return;

var messageText = message.content.toUpperCase(); 

if (messageText == "+AVATAR") {
    message.channel.sendFile(message.author.avatarURL,'Avatar.png')
}

if (messageText == "+BOTAVATAR") {
    message.channel.sendFile(client.user.avatarURL,'BotAvatar.png')
}

if (messageText == "+SERVERICON") {
message.channel.sendFile(message.guild.iconURL,'ServerAvatar.png')
}
if (messageText == "+UPTIME") {
    var date = new Date(client.uptime);
    var strDate = '**';
    strDate += 'Uptime\n';
    strDate += date.getUTCDate() - 1 + ' days, ';
    strDate += date.getUTCHours() + ' hours, ';
    strDate += date.getUTCMinutes() + ' minutes, ';
    strDate += date.getUTCSeconds() + ' seconds**';
    message.channel.send(strDate)
}

if (messageText == "+SARAH") {
    if (message.author.id == "318821976372150272" || message.author.id == "338717002879336461" || message.author.id == "167922295556407296") {
    message.reply("Sarah is Sub's angel!")
 }
}
})

client.on("message", async message => {
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
         if(command === "say") {             
          if (!message.member.hasPermission("MANAGE_MESSAGES")) return;                                                                                                               
          const sayMessage = args.join(" ");
          message.delete().catch(O_o=>{});  
          message.channel.send(sayMessage);
        }
});

client.login(config.token);