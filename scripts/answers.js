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

  switch (messageText) {
    case "I DON'T LIKE PEPSI" || "I'M THIRSTY":
      message.reply(" here have a coke!");
      break;
  }

  if (messageText == "I DON'T LIKE PEPSI" || messageText == "I'M THIRSTY") {
    //  message.reply(" here have a coke!");
  }

  if (messageText == "I DON'T LIKE COKE") {
    message.reply(" well then, you get nothing you picky bastard!");
  }

  if (messageText == "I WANT WATER") {
    message.reply("have a water bottle you picky prick.")
  }

  if (messageText == "I LIKE PEPSI") {
    const pepsi = client.emojis.find("name", "pepsi");
    message.channel.send(pepsi);
  }
  if (messageText == "I WANT DR PEPPER") {
    message.reply(' Here have a Dr. Pepper... you ungrateful child!')
  }
  if (messageText == "I DON'T LIKE DR PEPPER") {
    message.reply(' Good!')
  }
  if (messageText == "I DON'T LIKE WATER" || messageText == "I DONT LIKE WATER") {
    message.channel.send(`Milk?`)
  }
  if (messageText == "I DON'T LIKE MILK" || messageText == "I DONT LIKE MILK") {
    message.channel.send("Well then you don't survive!")
  }
  if (messageText == "CRYSTAL PEPSI") {
    message.channel.send("Taken from us too soon");
  }
  if (messageText == "WHAT'S A PEPSI") {
    message.reply("pepsi is the best drink out there")
  }
})


client.login(run.token);