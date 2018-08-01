const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");

client.on('ready', () => {
    console.log('Eastereggs');
})

// Luke 
// Je bent zelf een lu

client.on('message', (message) => {
   if (message.author === client.user) return;
  
var messageText = message.content.toUpperCase(); 
   
   if(messageText == "CRYSTAL PEPSI") {
     message.channel.send("Taken from us too soon");
   }

   if (messageText == "WHAT'S A PEPSI") {
    message.reply("pepsi is the best drink out there")
}

if (messageText == "PUPSI") {
    message.channel.send("That's a dead meme")
}

if (messageText == "LUL") {
    message.reply("Je bent zelf een lu")
}
   
   
})



client.login(config.token)
