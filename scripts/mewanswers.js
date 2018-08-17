const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const fs = require('fs');
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

if (messageText == "I DON'T LIKE WATER") {
    message.channel.send(`Milk?`)
    }
if (messageText == "I DON'T LIKE MILK") {
    message.channel.send("Well then you don't survive!")
    } 
if (messageText == "+TEST") {
   message.author.send("You have activated the test command! /n As you read this message the bot is fine!")
       }   
})
if (messageText == "JOSIA") {
    message.channel.send('<@318821976372150272> you done fucked up again, sigh')
}
client.login(config.token);
