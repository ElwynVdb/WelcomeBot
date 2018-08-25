const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const config = require("./scripts/config.json");
const express = require('express');
const app = express();
var fs = require("fs");
var request = require('request');
const randomcolor = require('randomcolor');
const moment = require('moment');
//const altcheck = require('./altcheck.js');


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
        const modules = require('./configperguild.js');
    });

    client.on("message", (message) => {
    if(message.guild === null) return
    if (message.author.bot) return;
    var guildid = message.guild.id
    const configa = require(`./scripts/configs/${guildid}.json`)
    if(message.content.indexOf(configa.prefix) !== 0) return;

    const args = message.content.slice(configa.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    var messageText = message.content.toLowerCase();

    var mcIP = 'dmu.swdteam.co.uk';
    var mcPort = 25565; var mcPort1 = 25587;

    if(command == "creators") {
        var creator = JSON.parse(fs.readFileSync("./scripts/files/creators.json", {"encoding": "utf-8"}));
        message.channel.send(creator)
        }
    if(command === "log") {
        var log = fs.readFileSync("./scripts/files/UPDATELOG.md", {"encoding": "utf-8"});
          message.channel.send(`${log}`)
        }
    if(command === "configs") {
      if (!message.member.id == "318821976372150272") return;
        fs.readdirSync('./scripts/configs').forEach(configs => {
            message.channel.send(configs)
        })
     }
    if(command === "scripts") {
        if (!message.member.id == "318821976372150272") return;
        fs.readdirSync('./scripts').forEach(script => {
            message.channel.send(script)
        })
    }
    if(command === "ping") {
        message.channel.send('Pong!')
    }
    if(command === "dmu") {
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
if (command === "dmu") {
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
if(command === "dmu") {
    message.delete().catch(console.error);
}

})

client.on("message", (message) => {
    if (message.isMentioned(client.users.get('482123759461859348'))) {
        if(message.guild === null) return
        if (message.author.bot) return;
        var guildid = message.guild.id
        const configa = require(`./scripts/configs/${guildid}.json`)
        var prefix = configa.prefix
        var mentionembed = new Discord.RichEmbed()
        .setTitle("**Guild Information**")
        .setColor(randomcolor())
        .setThumbnail(`${message.guild.iconURL}`)
        .addField(`Prefix:  **${prefix}**`, `${prefix}prefix "Newprefix"`)
        .addField('Guild Created', `${moment(message.guild.createdAt).format('MM.DD.YY')}`, true)
        .setFooter("LukeBeforeYouBot")
        .setTimestamp()


        message.channel.sendEmbed(mentionembed)
    }
})

client.login(config.token)
