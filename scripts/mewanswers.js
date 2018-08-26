const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const fs = require('fs');
const run = require('./cfg.json');


client.on('ready', () => {
    console.log('Mew answers ready');
})

client.on('message', (message) => {
    if (message.guild === null) return;
   if (message.author === client.user) return;
  
var messageText = message.content.toUpperCase();

if (messageText == "I DON'T LIKE WATER") {
    message.channel.send(`Milk?`)
    }
if (messageText == "I DON'T LIKE MILK") {
    message.channel.send("Well then you don't survive!")
    } 
})
client.login(run.token);
