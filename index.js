const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./scripts/config.json");
const run = require('./scripts/cfg.json');

client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setStatus('Online')
  client.user.setActivity('Welcome to hell!')
  const modules = require('./scripts/modules.js');
  // const configedit = require('./configedit.js')
});

client.on("disconnect", () => {
  client.login(run.token);
})

client.login(run.token)
