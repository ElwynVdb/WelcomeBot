const Discord = require('discord.js');
const client = new Discord.Client();
const run = require('./cfg.json');


//const welcome = require("./welcome.js");
//const dm = require("./dmmessage.js");
const s = require("./commands.js");
const a = require("./information.js");

client.login(run.token);