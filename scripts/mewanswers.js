const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");


//Mew 
 //Added "WHO MADE YOU?"
//Added "I DON'T LIKE WATER"
//Added "I DON'T LIKE MILK"
//Added "WHAT IS A MEW?"
//Added "WHAT IS MEW BOT?"
//Added sentence including"YOGSCAST"
//Added sentence start with"FORTNITE"
//Note - Anything starting with + is a command, most of these are tests, and will be removed if they do not work
//:regional_indicator_f:

client.on('ready', () => {
    console.log('Mew answers ready');
})

client.on('message', (message) => {
   if (message.author === client.user) return;
  
var messageText = message.content.toUpperCase();
  

if (messageText == "+creators") {
    message.channel.send("Some lovely people by the name of Josia, Luke, Sub, Ished and Mew!")
    }
if (messageText == "I DON'T LIKE WATER") {
    message.channel.send(`Milk? :milk:`)
    }
if (messageText == "I DON'T LIKE MILK") {
    message.channel.send("Well then you don't survive you fussy shite!")
    } 
if (messageText == "+TEST") {
   message.author.send("You have activated the test command! /n As you read this message the bot is fine!")
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
