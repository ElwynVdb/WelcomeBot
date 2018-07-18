const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const config = require("./scripts/config.json");
const express = require('express');
const app = express();
const reboot = require("./scripts/reboot.js");
const answers = require("./scripts/answers.js");
const welcome = require("./scripts/welcome.js");

//To add when using glitch
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
      });
     app.listen(process.env.PORT);
      setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
      }, 280000);

 // Checks
 
 client.on('ready',() => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setStatus('Online')
    client.user.setActivity('Welcome to hell!')
  });



  client.on('message', message => {
    if (message.author.id !== "318821976372150272") return;
    switch(message.content.toLowerCase()) {
        case '-reboot':
            resetBot(message.channel);
        message.author.sendMessage("is this a thing?");
            break;
    }
  });

  // Turn bot off (destroy), then turn it back on
  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting Index')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
  }


  client.login(config.token)


//Did they decide of friend rank already?