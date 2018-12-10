const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const config = require("./scripts/config.json");
const run = require('./scripts/cfg.json');
const express = require('express');
const app = express();
var fs = require("fs");
var request = require('request');
const randomcolor = require('randomcolor');
const moment = require('moment');

//To add when using glitch
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
      });
     app.listen(process.env.PORT);
      setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
      }, 280000);

      client.on('ready', () => {
        console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
        client.user.setStatus('Online')
        client.user.setActivity('Welcome to hell!')
        const modules = require('./scripts/modules.js');
       // const configedit = require('./configedit.js')
    });


client.on("disconnect", () => {
    client.login(run.token);
  })

client.login(run.token)
