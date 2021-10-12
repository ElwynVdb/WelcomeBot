const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const run = require('./cfg.json');

client.on('ready', () => {
  console.log('[Bot] Chat answers ready!');
})

client.on('message', (message) => {
  if (message.author === client.user) return;

  var messageText = message.content.toLowerCase();

  switch (messageText) {
    
    case "i'm thirsty":
    case "i don't like pepsi":
      message.reply(" here have a coke!");
      break;

    case "i don't like coke":
      message.reply(" well then, you get nothing you picky bastard!");
      break;

    case "i want water":
      message.reply("have a water bottle you picky prick.");
      break;

    case "i like pepsi":
      const pepsi = client.emojis.find("name", "pepsi");
      message.channel.send(pepsi);
      break;

    case "i want dr pepper":
      message.reply(' Here have a Dr. Pepper... you ungrateful child!');
      break;

    case "i don't like dr pepper":
      message.reply(' Good!');
      break;

    case "i don't like water":
      message.channel.send(`Milk?`);
      break;

    case "i don't like milk":
      message.channel.send("Well then you don't survive!");
      break;

    case "crystal pepsi":
      message.channel.send("Taken from us too soon");
      break;

    case "what's a pepsi":
      message.reply("pepsi is the best drink out there");
      break;
  }
})

client.login(run.token);