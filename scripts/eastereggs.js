const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");

client.on('ready', () => {
    console.log('Eastereggs');
})

// Luke 

client.on('message', (message) => {
   if (message.author === client.user) return;
  
var messageText = message.content.toUpperCase(); 
   
   if(messageText == "CRYSTAL PEPSI") {
     message.channel.send("taken from us top soon");
   }

   if (messageText == "WHAT'S A PEPSI") {
    message.reply("pepsi is the best drink out there")
}

if (messageText == "PUPSI") {
    message.channel.send("thats a dead meme")
}
   
   
})



client.login(config.token)
