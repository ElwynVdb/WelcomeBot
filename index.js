const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const config = require("./scripts/config.json");
const express = require('express');
const app = express();
var request = require('request');
const modules = require('./scripts/modules.js');
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
    if (message.author.id == "318821976372150272" || message.author.id == "338717002879336461") {
    switch(message.content.toLowerCase()) {
        case '-reboot':
           message.channel.send("LukeBeforeYouBot Reload");
            resetBot(message.channel);
            break;
      }
    }
});

  // Turn bot off (destroy), then turn it back on
  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('----------------')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
  }


var mcCommand = '/DMU' || '/dmu'; // Command for triggering
var mcIP = 'dmu.swdteam.co.uk'; // Your MC server IP
var mcPort = 25565;

client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = '*DMU Private is currently offline*';
            if(body.online) {
                status = '**DMU Beta** is **online**  -  ';

              if(body.players.now) {
                    status += '**' + body.players.now + '** people are playing!';
                } else {
                    status += '*Nobody is playing!*';
                }
            }
            message.author.send(status).catch(console.error);
        });
    }
});

var mcIP1 = 'dmu.swdteam.co.uk'; // Your MC server IP
var mcPort1 = 25587; // Your MC server port

client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort1;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
              message.delete().catch(O_o=>{});  
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = '*DMU Public is currently offline*';
            if(body.online) {
                status = '**DMU Public** is **online**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** people are playing!';
                } else {
                    status += '*Nobody is playing!*';
                }
            }
            message.author.send(status).catch(console.error);
        });
    }
});

client.on('message', message => {
 if (message.content.includes('/DMU'))
     message.delete();
})

  client.login(config.token)


