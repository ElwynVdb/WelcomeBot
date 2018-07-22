const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const express = require('express');
const app = express();

const reboot = require("./scripts/reboot.js");
const answers = require("./scripts/answers.js");
const welcome = require("./scripts/welcome.js");
const userinfo = require("./scripts/userinfo");
const easteregg = require("./scripts/eastereggs.js");
const mewanswer = require("./scripts/mewanswers.js");
const help = require("./scripts/help.js");
const answerdm = require("./scripts/dmmessage.js");


client.login(config.token);