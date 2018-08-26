const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const fs = require('fs');

client.on("ready", () => {
 console.log('Report Ready')
})

client.on("message", async message => {
    if(message.guild === null) return
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "report") {     
let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!rUser) return message.channel.send("Couldn't find user.");
let rreason = args.join(" ").slice(22);

let reportEmbed = new Discord.RichEmbed()
.setDescription("Reports")
.setColor("#15f153")
.addField("Reported User", `${rUser}`)
.addField("Reported By", `${message.author}`)
.addField("Channel", message.channel)
.addField("Time", message.createdAt)
.addField("Reason", rreason);

let reportschannel = message.guild.channels.find(`name`, configa.reportchannel);
if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

message.delete().catch(O_o=>{});
reportschannel.send(reportEmbed);
      console.log(`${rUser.username} got reported by ${message.author.username} for: ${rreason}`)
    }
}); 

client.login(config.token)