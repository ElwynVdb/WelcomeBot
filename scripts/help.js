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
        message.author.send('Help Message:')
        message.author.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Commands",
            url: "https://www.youtube.com/watch?v=29jDgmU353Q",
            description: "Get to know all the commands!",
            fields: [{
                name: "+help",
                value: "This help embed"
              },
              {
                name: "+avatar",
                value: "Get's user's avatar"
              },
              {
                name: "+botavatar",
                value: "Get's bot avatar"
              },
              {
                name: "+servericon" ,
                value: "Get's server's icon" 
              },
              {
                name: "+ished",
                value: "Ished?"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© LukeBeforeYouBot SWDTeam"
            }
          }
        });
    }
});

client.login(config.token);