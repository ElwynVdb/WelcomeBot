const Discord = require('discord.js');
const client = new Discord.Client();
const run = require('./scripts/cfg.json');
const config = require('./scripts/config.json');

const commands = require("./scripts/commands.js");

client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setStatus("Online");
});

client.on("message", (message) => {
  if (message.guild === null || message.author.bot) return;

  commands.commandListener(message);
});

client.on("guildMemberAdd", (member) => {
  if (member.guild.id !== run.guildid) return;
  
  var channel = config.welcomechannel
  member.guild.channels.find("name", channel).send(config.welcomemsg.replace(/%user%/g, member.user));
});

client.on("guildMemberRemove", (member) => {
  if (member.guild.id !== run.guildid) return;

  var channel = config.welcomechannel
  var membertag = member.user.tag.slice(0, -5)
  member.guild.channels.find("name", channel).send(config.leavemsg.replace(/%user%/g, membertag));
});

client.login(run.token);