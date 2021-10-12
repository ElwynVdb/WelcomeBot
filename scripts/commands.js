const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");
const fs = require('fs')
const run = require('./cfg.json');

client.on('ready', () => {
   console.log('Commands are ready');
})

client.on("message", async message => {
   if (message.guild === null) return;
   if (message.author.bot) return;
   if (message.content.indexOf(config.prefix) !== 0) return;

   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();

   switch (command) {
      case "avatar":
         if (!message.mentions.users.first()) {
            message.channel.sendFile(message.author.avatarURL, 'Avatar.png');
            return;
         }
         message.channel.sendFile(user.avatarURL, 'Avatar.png');
         break;

      case "botavatar":
         message.channel.sendFile(client.user.avatarURL, 'Avatar.png');
         break;

      case "servericon":
         message.channel.sendFile(message.guild.iconURL, 'ServerIcon.png');
         break;

      case "uptime":
         var date = new Date(client.uptime);
         var strDate = '**';
         strDate += 'Uptime\n';
         strDate += date.getUTCDate() - 1 + ' days, ';
         strDate += date.getUTCHours() + ' hours, ';
         strDate += date.getUTCMinutes() + ' minutes, ';
         strDate += date.getUTCSeconds() + ' seconds**';
         message.channel.send(strDate);
         break;

      case "say":
         if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You don\'t have permission to use this!');
         const sayMessage = args.join(" ");
         message.delete().catch(console.error);
         message.channel.send(sayMessage);
         break;
      }
})

client.login(run.token);