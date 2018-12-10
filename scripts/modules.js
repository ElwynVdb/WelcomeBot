const Discord = require('discord.js');
const client = new Discord.Client();
const run = require('./cfg.json');


const welcome = require("./welcome.js");

client.login(run.token);