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
    if(message.author.bot) return;
    if(message.guild.id !== run.guildid) return;
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

 if(command === "avatar") {
     var user = message.mentions.users.first()
     if(!user) {
    message.channel.sendFile(message.author.avatarURL,'Avatar.png')
 }else{
     message.channel.sendFile(user.avatarURL, 'Avatar.png')
 }
}
 if(command === "botavatar") {
    message.channel.sendFile(client.user.avatarURL,'Avatar.png')
} 
 if(command === "servericon") {
    message.channel.sendFile(message.guild.iconURL,'ServerAvatar.png')
 }
 if(command === "uptime") {
    var date = new Date(client.uptime);
    var strDate = '**';
    strDate += 'Uptime\n';
    strDate += date.getUTCDate() - 1 + ' days, ';
    strDate += date.getUTCHours() + ' hours, ';
    strDate += date.getUTCMinutes() + ' minutes, ';
    strDate += date.getUTCSeconds() + ' seconds**';
    message.channel.send(strDate)
 }
 if (command === "picture") {
    if(message.author.id !== run.ownerID) return;
    const pic = args.join(" ");
    client.user.setAvatar(`./scripts/pics/${pic}.png`)
       message.channel.sendEmbed({ color: 3447003,
      description: `Changed to Picture: ${pic} for my profile picture ` });
};

 if(command === "sarah") {
    if(message.guild.id == "217396856550981633") {
    if (message.author.id == "318821976372150272" || message.author.id == "338717002879336461" || message.author.id == "167922295556407296") {
    message.reply("Sarah is Sub's angel!")
  }
 }
}
if(command === "say") {             
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You don\'t have permission to use this!');                                                                                                               
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
}
 if(command === "guidelines") {
    if(message.guild.id == "217396856550981633") {
     message.channel.sendURL('https://docs.google.com/document/d/17nAXM3r6V6pFOcdyjyWRiVjEYlq3XwPtaufRl7Zbndw/edit')
   }
  }
})

client.on("message", (msg) => {
    var publico =  "384660211954090004"
    var privates = "403635093857632266"
    
    if(msg.channel.id === publico) {
    if(msg.author.id == "302066601648455690") {
    if(msg.content.includes("just joined the server!")) {
     let data = client.channels.find("id", "510899984502226965")
     data.send(msg.content)
    }else{
      if(msg.content.includes("just left the server!")) {
         let data = client.channels.find("id", "510899984502226965")
     data.send(msg.content)
      }
    }
    }
    }else{
      if(msg.channel.id === privates) {
     if(msg.author.id == "302066601648455690") {
    if(msg.content.includes("just joined the server!")) {
     let data = client.channels.find("id", "510899984502226965")
     data.send(msg.content)
    }else{
      if(msg.content.includes("just left the server!")) {
         let data = client.channels.find("id", "510899984502226965")
     data.send(msg.content)
      }
    }
    }
      }
    }
 })
 
 client.login(run.token);