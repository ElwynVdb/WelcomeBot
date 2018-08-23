const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./scripts/config.json')

client.on("ready", () => {
  const modules = require('./scripts/modules.js');
    console.log('Ready ConfigGuild')
})

const fs = require('fs');

/*var folder = "./plugins/configs"
if (!fs.existsSync(folder)) {
  fs.mkdirSync("/configs")
}*/

/*client.on('guildCreate', (guild) => {
  const guildid = guild.id
  const guildname = guild.name
  var dconfig = fs.readFileSync('./dconfig.json')
  fs.readdirSync('./scripts/configs')
  fs.writeFileSync(`./scripts/configs/${guildid}.json`, dconfig)
  const configa = require(`./scripts/configs/${guildid}.json`)
    let guildjname = guildname
    configa.guildname = guildjname;
    fs.writeFile(`./scripts/configs/${guildid}.json`, JSON.stringify(configa, null, 4), (err) => console.error);
})*/



/*client.on('guildDelete', (guild) => {
  const guildid = guild.id
  const guildname = guild.name
  fs.readdirSync('./scripts/configs')
  fs.unlinkSync(`./scripts/configs/${guildid}.json`);
});*/

client.on('message', (message) => {
  if (message.guild === null) return;
  const guildid = message.guild.id
  if (fs.existsSync(`./scripts/configs/${guildid}.json`)) {
  var configa = require(`./scripts/configs/${guildid}.json`)
  if(message.content.indexOf(configa.prefix) !== 0) return;
  const args = message.content.slice(configa.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  

if(command === "configs") {
  if (!message.member.id == "318821976372150272") return;
  fs.readdirSync('./scripts/configs').forEach(file => {
    message.channel.send(file)
})
}
if(command === "prefix") {
     if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply('You don\'t have permission to use this!'); 
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    configa.prefix = newPrefix;
    message.channel.send(`Prefix has been changed to ${newPrefix}`)
    fs.writeFile(`./scripts/configs/${guildid}.json`, JSON.stringify(configa, null, 4), (err) => console.error);
}
 if(command === "welcomechannel"){
     if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply('You don\'t have permission to use this!'); 
  let newwelcome = message.content.split(" ").slice(1, 2)[0];
  configa.welcomechannel = newwelcome;
  fs.writeFile(`./scripts/configs/${guildid}.json`, JSON.stringify(configa, null, 4), (err) => console.error);
  message.channel.send(`The new welcome/leave channel is ${newwelcome}`)
 }
 if(command === "adminrole"){
  if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.id === config.ownerID) return message.reply('You don\'t have permission to use this!'); 
  let newadminrole = message.content.split(" ").slice(1, 2)[0];
  configa.adminrole = newadminrole;
  fs.writeFile(`./scripts/configs/${guildid}.json`, JSON.stringify(configa, null, 4), (err) => console.error);
  message.channel.send(`Changed Admin role to ${newadminrole}`)
 }
 if(command === "modrole"){

  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply('You don\'t have permission to use this!'); 
  let newmodrole = message.content.split(" ").slice(1, 2)[0];
  configa.modrole = newmodrole;
  fs.writeFile(`./scripts/configs/${guildid}.json`, JSON.stringify(configa, null, 4), (err) => console.error);
  message.channel.send(`Changed Mod role to ${newmodrole}`)
}
 if(command === "extracmd"){
  if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.id === config.ownerID) return message.reply('You don\'t have permission to use this!'); 
   if (configa.extracommands === "false") {
  let enablecmd = "true"
  configa.extracommands = enablecmd;
  fs.writeFile(`./scripts/configs/${guildid}.json`, JSON.stringify(configa, null, 4), (err) => console.error);
  message.channel.send('Enabled Extra Commands!')
 } else 
 {
  if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.id === config.ownerID) return message.reply('You don\'t have permission to use this!'); 
   if (configa.extracommands === "true") {
  let disablecmd = "false"
  configa.extracommands = disablecmd;
  fs.writeFile(`./scripts/configs/${guildid}.json`, JSON.stringify(configa, null, 4), (err) => console.error);
  message.channel.send('Disabled Extra Commands!')
 }
}
}
  }
})

client.login(config.token);