const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json')

client.on("ready", () => {
    console.log('Ready')
})

const fs = require('fs');

var folder = "./configs"
if (!fs.existsSync(folder)) {
  fs.mkdirSync("./configs")
}

client.on('guildCreate', (guild) => {
  const guildid = guild.id
  const guildname = guild.name
  var dconfig = fs.readFileSync('./dconfig.json')
  fs.readdirSync('./configs')
  fs.writeFileSync(`./configs/${guildid}.json`, dconfig)
  const configa = require(`./configs/${guildid}.json`)
    let guildjname = guildname
    configa.guildname = guildjname;
    fs.writeFile(`./configs/${guildid}.json`, JSON.stringify(configa, null, 4), (err) => console.error);
})



client.on('guildDelete', (guild) => {
  const guildid = guild.id
  const guildname = guild.name
  fs.readdirSync('./configs')
  fs.unlinkSync(`./configs/${guildid}.json`);
});

client.on('message', (message) => {
  const guildid = message.guild.id
  var configa = require(`./configs/${guildid}.json`)
  if(message.content.indexOf(configa.prefix) !== 0) return;
  const args = message.content.slice(configa.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "configs") {
  if (!message.member.id == "318821976372150272") return;
  fs.readdirSync('./configs').forEach(file => {
    message.channel.send(file)
})
}
})


client.login(config.token);