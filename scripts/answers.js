const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");

client.on('ready', () => {
    console.log('Answers are ready');
})

client.on('message', (message) => {
   if (message.author === client.user) return;
  
var messageText = message.content.toUpperCase(); 
  
  if (messageText == "I DON'T LIKE PEPSI" || messageText == "I'M THIRSTY") {
      message.reply(" here have a coke!");
  }
  
  if (messageText == "I DON'T LIKE COKE") {
    message.reply(" well then, you get nothing you picky bastard!");
  }
  
  
  if (messageText == "WHO IS MUMBLES?") {
  message.channel.sendFile('https://cdn.discordapp.com/attachments/209620687818588161/279613536378945537/MUMBLES.png','MUMBLESNOTHATSTHEFUCKINGCARPETNO.png')
  }
  
   if (messageText == "+AVATAR") {
    message.channel.sendFile(message.author.avatarURL,'Avatar.png')
   }
  
   if (messageText == "I WANT WATER") {
     message.reply("have a water bottle you picky prick.")
   }
  
   if (messageText == "+ISHED") {
       message.channel.send("who's that?")
   }

   if (messageText == "+BOTAVATAR") {
       message.channel.send(client.user.avatarURL,'BotAvatar.png')
   }

   if (messageText == "+SERVERAVATAR") {
       message.channel.sendFile(message.guild.iconURL,'ServerAvatar.png')
   }

   if (messageText == "I LIKE PEPSI") {
    const pepsi = client.emojis.find("name", "pepsi");
    message.channel.send(`${pepsi}`);
}
  
if (messageText == "+SARAH") {
if (message.author.id == "318821976372150272" || message.author.id == "338717002879336461" || message.author.id == "167922295556407296") {
message.reply("Sarah is Sub's angel!")
}
}

})


client.login(config.token);
  


