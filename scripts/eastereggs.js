const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const run = require('./cfg.json');

client.on('ready', () => {
    console.log('Eastereggs');
})

client.on('message', (message) => {
   if (message.author === client.user) return;
   if(message.guild.id !== run.guildid) return;
  
 var messageText = message.content.toUpperCase(); 
   
 if(messageText == "CRYSTAL PEPSI") {
    message.channel.send("Taken from us too soon");
   }
 if (messageText == "WHAT'S A PEPSI") {
    message.reply("pepsi is the best drink out there")
  }
})

client.login(run.token)
