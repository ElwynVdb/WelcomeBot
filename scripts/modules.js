const Discord = require('discord.js');
const client = new Discord.Client();
const run = require('./cfg.json');


const welcome = require("./welcome.js");
const dm = require("./dmmessage.js");
const cmd = require("./commands.js");
const reply = require("./answers.js");

client.login(run.token);