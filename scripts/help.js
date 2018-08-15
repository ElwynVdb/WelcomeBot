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
              name: ("LukeBeforeYouBot"),
              icon_url: "https://cdn.discordapp.com/attachments/223033559726686208/469544295326547988/lukebotbutbetter.png"
            },
            title: "Commands",
            url: "https://cdn.discordapp.com/attachments/223033559726686208/469544295326547988/lukebotbutbetter.png",
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
                name: "+creators",
                value: "List of creators/contributors"
              },
              {
                  name: "+userinfo",
                  value: "Info on the user running the command"
              },
              {
                name: "+uptime",
                value: "Shows for how long the bot is online."
              },
              {
                name: "+log",
                value: "Sends a txt file with the update/version log"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© LukeBeforeYouBot SWDTeam"
            }
          }
          
        });

        if(messageText == "+HELP") {
        message.author.send({embed: {
            color: 3447003,
            author: {
              name: ("LukeBeforeYouBot"),
              icon_url: "https://cdn.discordapp.com/attachments/223033559726686208/469544295326547988/lukebotbutbetter.png"
            },
            title: "Text Commands",
            url: "https://cdn.discordapp.com/attachments/223033559726686208/469544295326547988/lukebotbutbetter.png",
            description: "Learn the text commands!",
            fields: [{
                name: "1.",
                value: "I don't like pepsi"
              },
              {
                name: "2.",
                value: "I don't like coke"
              },
              {
                name: "3.",
                value: "I don't like water"
              },
              {
                name: "4.",
                value: "I don't like milk"
              },
              {
                  name: "5.",
                  value: "Who is Mumbles?"                     
                },
                {
                  name: "6.",
                  value: "I want water"
                },
                {
                    name: "7.",
                    value: "I like pepsi"
                },
                {
                    name: "Easter Eggs!",
                    value: "There are 3 easter egg text commands! See if you can guess any!"
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
}
});

client.login(config.token);