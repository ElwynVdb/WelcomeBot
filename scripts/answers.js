const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const run = require('./cfg.json');

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
  
   if (messageText == "I WANT WATER") {
     message.reply("have a water bottle you picky prick.")
   }

   if (messageText == "I LIKE PEPSI") {
    const pepsi = client.emojis.find("name", "pepsi");
    message.channel.send(`${pepsi}`);
}
 if(messageText == "I WANT DR PEPPER") {
   message.reply(' Here have a Dr. Pepper... you ungrateful child!')
 }
 if(messageText == "I DON'T LIKE DR PEPPER") {
   message.reply(' Good!')
 }
})


client.login(run.token);