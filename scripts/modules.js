const Discord = require('discord.js');
const client = new Discord.Client();
const run = require('./cfg.json');

const reboot = require("./reboot.js");
const answers = require("./answers.js");
const userserverinfo = require("./information.js");
const easteregg = require("./eastereggs.js");
const mewanswer = require("./mewanswers.js");
const help = require("./help.js");
const answerdm = require("./dmmessage.js");
const commands = require("./commands.js");
const rank = require("./ranklist.js");
const welcome = require("./welcome.js");
const eval = require("./eval.js");
const report = require("./report.js");
//const extracmd = require('./extracmds.js');

client.login(run.token);