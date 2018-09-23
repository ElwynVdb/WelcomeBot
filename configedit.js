const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./scripts/config.json')
const run = require('./scripts/cfg.json');
const fs = require('fs');

client.on("ready", () => {  
    console.log('Ready ConfigGuild')
})

client.on('message', (message) => {
  if (message.guild === null) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  
if(command === "prefix") {
  if(message.guild.id !== run.guildid) return message.reply('Use this command in SWDTeam discord!');
     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You don\'t have permission to use this!'); 
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    config.prefix = newPrefix;
    message.channel.send(`Prefix has been changed to ${newPrefix}`)
    fs.writeFile(`./scripts/config.json`, JSON.stringify(config, null, 4), (err) => console.error);
}
 if(command === "welcomechannel"){
  if(message.guild.id !== run.guildid) return message.reply('Use this command in SWDTeam discord!');
     if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('You don\'t have permission to use this!'); 
  let newwelcome = message.content.split(" ").slice(1, 2)[0];
  config.welcomechannel = newwelcome;
  fs.writeFile(`./scripts/config.json`, JSON.stringify(config, null, 4), (err) => console.error);
  message.channel.send(`The new welcome/leave channel is ${newwelcome}`)
 }
 if(command === "adminrole"){
  if(message.guild.id !== run.guildid) return message.reply('Use this command in SWDTeam discord!');
  if (!message.member.hasPermission("ADMINISTRATOR")); 
  let newadminrole = args.join(" ")
  config.adminrole = newadminrole;
  fs.writeFile(`./scripts/config.json`, JSON.stringify(config, null, 4), (err) => console.error);
  message.channel.send(`Changed Admin role to ${newadminrole}`)
 }
 if(command === "modrole"){
  if(message.guild.id !== run.guildid) return message.reply('Use this command in SWDTeam discord!');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You don\'t have permission to use this!'); 
  let newmodrole = args.join(" ")
  config.modrole = newmodrole;
  fs.writeFile(`./scripts/config.json`, JSON.stringify(config, null, 4), (err) => console.error);
  message.channel.send(`Changed Mod role to ${newmodrole}`)
}
if(command === "ruleschannel") {
  if(message.guild.id !== run.guildid) return message.reply('Use this command in SWDTeam discord!');
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply('You don\'t have permission to use this!'); 
  let ruleschannelnew = message.content.split(" ").slice(1, 2)[0];
  config.ruleschannel = ruleschannelnew;
  fs.writeFile(`./scripts/config.json`, JSON.stringify(config, null, 4), (err) => console.error);
  message.channel.send(`Changed rules channel to ${ruleschannelnew}`)
}
if(command === "reportchannel") {
  if(message.guild.id !== run.guildid) return message.reply('Use this command in SWDTeam discord!');
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply('You don\'t have permission to use this!'); 
  let reportchannelnew = message.content.split(" ").slice(1, 2)[0];
  config.reportchannel = reportchannelnew;
  fs.writeFile(`./scripts/config.json`, JSON.stringify(config, null, 4), (err) => console.error);
  message.channel.send(`Changed report channel to ${reportchannelnew}`)
}
if(command === "verify") {
  if(message.guild.id !== run.guildid) return message.reply('Use this command in SWDTeam discord!');
  if(message.author.id !== run.ownerID) return;
  const guildname = message.guild.name
  let guildjname = guildname
  config.guildname = guildjname;
  fs.writeFile(`./scripts/config.json`, JSON.stringify(config, null, 4), (err) => console.error);
  message.channel.send(`Verified ${guildname}`)
}
 if(command === "extracmd"){
  if(message.guild.id !== run.guildid) return message.reply('Use this command in SWDTeam discord!');
  if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.id === config.ownerID) return message.reply('You don\'t have permission to use this!'); 
   if (config.extracommands === "false") {
  let enablecmd = "true"
  config.extracommands = enablecmd;
  fs.writeFile(`./scripts/config.json`, JSON.stringify(config, null, 4), (err) => console.error);
  message.channel.send('Enabled Extra Commands!')
 } else 
 {
  if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.id === config.ownerID) return message.reply('You don\'t have permission to use this!'); 
   if (config.extracommands === "true") {
  let disablecmd = "false"
  config.extracommands = disablecmd;
  fs.writeFile(`./scripts/config.json`, JSON.stringify(config, null, 4), (err) => console.error);
  message.channel.send('Disabled Extra Commands!')
    }
   }
  } 
})

client.login(run.token);