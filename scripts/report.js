const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () => {
    console.log('Report Ready')
})

client.on("message", async message => {
    if(message.guild === null) return
    var guildid = message.guild.id
    const configa = require(`./configs/${guildid}.json`)
    if(message.content.indexOf(configa.prefix) !== 0) return;
    const args = message.content.slice(configa.prefix.length).trim().split(/ +/g);
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
      console.log(`${rUser} got reported by ${message.author} for: ${rreason}`)
    }
}); 


client.login(config.token)