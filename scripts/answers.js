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
  
  if(messageText == "I DON'T LIKE PEPSI" || messageText == "I'M THIRSTY") {
      message.reply(" here have a coke!");
  }
  
  if(messageText == "I DON'T LIKE COKE") {
    message.reply(" well then, you get nothing you picky bastard!");
  }
  
  
  if (messageText == "WHO IS MUMBLES?") {
  message.channel.sendFile('https://cdn.discordapp.com/attachments/209620687818588161/279613536378945537/MUMBLES.png','MUMBLESNOTHATSTHEFUCKINGCARPETNO.png')
  }
  
   if (messageText == "+AVATAR") {
    message.channel.sendFile(message.author.avatarURL,'Avatar.png')
   }

}
);

client.on('message', message => {
  if (message.author.id == "318821976372150272" || message.author.id == "338717002879336461") {
    switch(message.content.toLowerCase()) {
        case '-reboot':
            resetBot(message.channel);
        message.author.sendMessage("is this a thing?");
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
  


