const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json")

client.on("ready", () => {
    console.log('InRole Command Ready')
})

client.on("message", (message) => {
    if(message.guild === null) return
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "inrole") {
        let roleName = message.content.split(" ").slice(1).join(" ");
        let membersWithRole = message.guild.members.filter(member => { 
            return member.roles.find("name", roleName);
        }).map(member => {
            return member.user.username;
        })
    
        let embed = new Discord.RichEmbed({
            "title": `Users with the ${roleName} role`,
            "description": membersWithRole.join("\n"),
            "color": 0xFFFF
        });
    
        return message.channel.send({embed});
    }
});

  client.login(config.token);
