const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
const config = require("./config.json");
const run = require("./cfg.json");

client.on("message", (message) => {
     
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    var Srole = message.guild.roles.find("name", config.modrole)
    var ASrole = message.guild.roles.find("name", config.adminrole)
    

    if(command === "warn") {
        const warns = require("./warnings.json")
        var mention1 = message.mentions.members.first();
        if(message.member.hasPermission('MANAGE_CHANNELS')) {
           if(!mention1) return message.reply("Please mention a user!");
          // message.channel.send(mention1.user.username)
          warns.push(mention1.user.username)
        }
    }

})

client.on("ready", () => {
    console.log("staff Cmd ready")
})

client.login(run.token)