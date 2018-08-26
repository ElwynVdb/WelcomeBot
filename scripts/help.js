const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");
const run = require('./cfg.json');
const randomcolor =  require("randomcolor")
const fs = require('fs');

client.on('ready', () => {
    console.log('Help is ready');
})

client.on("message", async message => {
  if (message.guild === null) return;
  const prefix = config.prefix
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "help") {
        message.reply('I sended you a DM.')
        message.author.send(`Help Message:\n Prefix: ${prefix} `)
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
                name: "help",
                value: "This help embed"
              },
              {
                name: "avatar",
                value: "Get your or someone elses avatar"
              },
              {
                name: "botavatar",
                value: "Get's bot avatar"
              },
              {
                name: "servericon" ,
                value: "Get's server's icon" 
              },
              {
                name: "creators",
                value: "List of creators/contributors"
              },
              {
                name: "userinfo",
                value: "Info on the user running the command"
              },
              {
                name: "report",
                value: "+report @User [Reason]"
              },
              {
                name: "uptime",
                value: "Shows for how long the bot is online."
              },
              {
                name: "log",
                value: "Sends a Markdown file with the update/version log into the chat."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© LukeBeforeYouBot SWDTeam"
            }
          }
          
        });

        if(command === "help") {
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
                  value: "I want water"
                },
                {
                    name: "6.",
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

client.login(run.token);