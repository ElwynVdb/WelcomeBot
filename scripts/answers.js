const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");

client.on('ready', () => {
    console.log('Answers are ready');
})

client.on('message', (message) => {
   if (message.author === client.user) return;
    if (message.content.startsWith("I don't like pepsi")) {
    message.reply(' Here have a coke!');
    }
else
{
if (message.content.startsWith("I don't like coke")) {
    message.reply(` well then you get nothing you picky bastard...`)
}
}
});

client.login(config.token);

