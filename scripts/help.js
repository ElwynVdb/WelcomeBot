const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");
const randomcolor =  require("randomcolor")
const pepsi = client.emojis.find("name", "pepsi");

client.on('ready', () => {
    console.log('+help is ready');
})

client.on('message', (message) => {
    if (message.author === client.user) return;
   
 var messageText = message.content.toUpperCase(); 
    let args = message.content.split(" ").slice(1);

    if(messageText == "+HELP") {
        var embed = new Discord.RichEmbed();
            embed.addField("LukeBeforeYouBot", `Help!`, true)
                .addField("Help for:", `${message.author.tag}`, true)
                .setColor(randomcolor())
                .setFooter('LukeBeforeYouBot ', 'SWDTeam')
                .setThumbnail(`https://cdn.discordapp.com/attachments/223033559726686208/469544295326547988/lukebotbutbetter.png`)
                .setTimestamp()
                .setURL(`https://www.youtube.com/watch?v=j7PgOcJNhjo`)
                .addField('***Commands***', ``, true)
                .addField('Welcome', `(auto welcomes)`, true)
                .addField('+help', `(This help embed)`, true)
                .addField('+avatar', `(get's user's avatar)`, true)
                .addField('+botavatar ', `(get's bot avatar)`, true)
                .addField('+serveravatar ', `(get's server's icon/avatar)`, true)
                .addField('+ished', `(ished)`, true)
                .addField('+sarah ', `(sarah)`, true)
                .addField('+creators', `(list of creators/contributors)`, true)
                .addField('+namemc', `(WIP)`, true)
                .addField('+3dskin', `(WIP)`, true)
                .addField('+skin', `(WIP)`, true)
                .addField('+test', `(a test command for the bot)`, true)
                .addField('+userinfo', `(info on the user running the command)`, true)
                .addField('-reboot ', `(Creator/Dev only command)`, true)
                .addField('***Text Commands***', `${pepsi}`, true)
                .addField('1.', `I don't like pepsi`, true)
                .addField('2.', `I don't like coke`, true)
                .addField('3.', `I don't like water`, true)
                .addField('4.', `I don't like milk`, true)
                .addField('5.', `Who is Mumbles?`, true)
                .addField('6.', `I want water`, true)
                .addField('7.', `I like pepsi`, true)
                .addField('8.', `What is a Mew?`, true)
                .addField('9.', `What is Mew Bot`, true)
                .addField(' ', `There are 3 easter egg text commands! See if you can guess any!`, true)
                .addField('***Other/Message Including or Starting With***', `/`, true)
                .addField('1', `If you start a sentence with "Fortnite" you get a reward!`, true)
                .addField('2', `If you have a message including the word "Yogscast", a special message appears!`, true)
                .addField('3', `If you DM the bot you get a message on top of the command of origin`, true)
        message.author.send(embed);
    }
});


client.login(config.token);