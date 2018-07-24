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

if (messageText == "+SAY") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }

  if (messageText == "+ISHED") {
    message.channel.send("who's that?")
}

if (messageText == "+BOTAVATAR") {
    message.channel.sendFile(client.user.avatarURL,'BotAvatar.png')
}

if (messageText == "+SERVERICON") {
message.channel.sendFile(message.guild.iconURL,'ServerAvatar.png')
}

if (messageText == "+SARAH") {
    if (message.author.id == "318821976372150272" || message.author.id == "338717002879336461" || message.author.id == "167922295556407296") {
    message.reply("Sarah is Sub's angel!")
    }

    if (messageText == "+AVATAR") {
        message.channel.sendFile(message.author.avatarURL,'Avatar.png')
    }
}
})

    client.login(config.token);