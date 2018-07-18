const express = require('express');
const app = express();
const http = require('http')
let config = require("./config.json")
let Eris = require('eris');
let Discord = require('discord.js')
let c = new Discord.Client();


c.on('guildMemberAdd', (guild, member) => {
    c.createMessage(guild.defaultChannel.id, `${member.user.mention}, Welcome to hell its great here pull up a chair and have a pepsi.`);
});

c.on('error', console.log)

c.login(config.token);
