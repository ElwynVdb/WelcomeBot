const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json")
const talkedRecently = new Set();

client.on("ready", () => {
    console.log('InRole Command Ready')
})

client.on("message", (message) => {
    if (talkedRecently.has(message.author.id)) return; 

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 5000);  
    if(message.content.startsWith("&inrole")){
        let roleName = message.content.split(" ").slice(1).join(" ");
    
        //Filtering the guild members only keeping those with the role
        //Then mapping the filtered array to their usernames
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
