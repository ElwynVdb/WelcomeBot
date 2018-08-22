const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var guildid = message.guild.id
const configa = require(`./configs/${guildid}.json`)

const fs = require('fs');
const moment = require('moment');

client.on("ready", () => {
    console.log('logger ready')
})

client.on("message", (msg) => {
if (msg.content.startsWith(configa.prefix) || msg.content.startsWith('-') || msg.content.startsWith('/') || msg.content.startsWith('&')) {
const logger = {
    log: (msg) => { 
        logger.write('LOG', msg);
        console.log(msg);
    },
    error: (msg) => {
        logger.write('ERROR', msg);
        console.error(msg);
    },
    write: (type, msg) => {
        fs.appendFile('./files/Message.log', `(${moment().format()}) [${type.toUpperCase()}]: ${msg}\r\n`, function(err) {
            if(err) throw err;
        });
    }
};
}
})

client.login(config.token);