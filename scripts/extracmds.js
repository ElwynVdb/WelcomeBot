const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");
const fs = require('fs')

client.on('ready', () => {
    console.log('Extra Commands are reggie like my body!');
})

client.on("message", async message => {
    if (message.guild === null) return;
    var guildid = message.guild.id
    const configa = require(`./configs/${guildid}.json`)
    if(message.content.indexOf(configa.prefix) !== 0) return;
    const args = message.content.slice(configa.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(configa.extracommands == "true") {

    if (command === "r34") {
        message.channel.send('https://rule34.xxx/index.php?page=post&s=list&tags='+args.join(" "))
    }
    if (command === "melee") {
        message.channel.sendFile("https://cdn.discordapp.com/attachments/463351454590042115/482220594692227103/MELEE.mp3","melee.mp3")
    }
  }

  var messageText = message.content.toUpperCase(); 
  
  if (messageText == "FORTNITE") {
  message.author.send('Did somebody say FORTNITE?')
  message.author.send('https://thumbs.gfycat.com/FineDampGecko-size_restricted.gif')

  }
})



client.login(config.token)