const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const express = require('express');
const app = express();

const reboot = require("./reboot.js");
const answers = require("./answers.js");
const welcome = require("./welcome.js");
const userinfo = require("./userinfo");
const easteregg = require("./eastereggs.js");
const mewanswer = require("./mewanswers.js");
const help = require("./help.js");
const answerdm = require("./dmmessage.js");
const commands = require("./commands.js");
const music = require("./music/music.js");


client.login(config.token);