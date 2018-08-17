const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () => {
    console.log('Report Ready')
})

client.on("message", async message => {
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
.addField("Time", message.createdAt)
.addField("Reason", rreason);

let reportschannel = message.guild.channels.find(`name`, "support");
if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


message.delete().catch(O_o=>{});
reportschannel.send(reportEmbed);
    }
}); 


client.login(config.token)