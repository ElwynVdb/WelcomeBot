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
            embed.addField("LukeBeforeYouBot", `Help!`, true)
                .addField("Help for:", `${member.user}`, true)
                .setColor(randomcolor())
                .setFooter(' ', ' ')
                .setThumbnail(`https://cdn.discordapp.com/attachments/223033559726686208/469544295326547988/lukebotbutbetter.png`)
                .setTimestamp()
                .setURL(``)
                .addField('Commands', ``, true)
                .addField('', `Welcome (auto welcomes)`, true)
                .addField('', `+help (help)`, true)
                .addField('', `+avatar (get's user's avatar)`, true)
                .addField('', `+botavatar (get's bot avatar)`, true)
                .addField('', `+serveravatar (get's server's icon/avatar)`, true)
                .addField('', `+ished (ished)`, true)
                .addField('', `+sarah (sarah)`, true)
                .addField('', `+creators (list of creators/contributors)`, true)
                .addField('', `+namemc (WIP)`, true)
                .addField('', `+3dskin (WIP)`, true)
                .addField('', `+skin (WIP)`, true)
                .addField('', `+test (a test command for the bot)`, true)
                .addField('', `+userinfo (info on the user running the command)`, true)
                .addField('', `-reboot (Creator/Dev only command)`, true)
                .addField('Text Commands', ``, true)
                .addField('', `I don't like pepsi`, true)
                .addField('', `I don't like coke`, true)
                .addField('', `I don't like water`, true)
                .addField('', `I don't like milk`, true)
                .addField('', `Who is Mumbles?`, true)
                .addField('', `I want water`, true)
                .addField('', `I like pepsi`, true)
                .addField('', `What is a Mew?`, true)
                .addField('', `What is Mew Bot`, true)
                .addField('', `There are 3 easter egg text commands! See if you can guess any!`, true)
                .addField('Other/Message Including or Starting With', ``, true)
                .addField('', `If you start a sentence with "Fortnite" you get a reward!`, true)
                .addField('', `If you have a message including the word "Yogscast", a special message appears!`, true)
                .addField('', `If you DM the bot you get a message on top of the command of origin`, true)
        message.author.send(embed);
    }
});


client.login(config.token);