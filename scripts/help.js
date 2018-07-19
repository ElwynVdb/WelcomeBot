const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");

client.on('ready', () => {
    console.log('+help is ready');
})

client.on('message', (message) => {
    if (message.author === client.user) return;
   
 var messageText = message.content.toUpperCase(); 
    let args = message.content.split(" ").slice(1);

    if(messageText == "+help") {
        var embed = new Discord.RichEmbed();
            embed.addField("", ``, true)
                .addField("", ``, true)
                .setColor(randomcolor())
                .setFooter(' ', ' ')
                .setThumbnail(``)
                .setTimestamp()
                .setURL(``)
                .addField('', ``, true)
                .addField('', ``, true)
                .addField('', ``, true)
                .addField('', `}`, true)
                .addField('', ``, true)
                .addField('', ``, true)
        message.author.send(embed);
    }
});


client.login(config.token);