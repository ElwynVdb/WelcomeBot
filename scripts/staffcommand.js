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
        const warn = JSON.parse(fs.readFileSync("./warnings.json"))
        var mention1 = message.mentions.members.first();
        let warn1 = message.guild.roles.find(r => r.name === "Warning 1")
        let warn2 = message.guild.roles.find(r => r.name === "Warning 2")
        let warn3 = message.guild.roles.find(r => r.name === "Warning 3")

        if(message.member.hasPermission('MANAGE_CHANNELS')) {
           if(!mention1) return message.reply("Please mention a user to warn!")
           message.delete(120);

           var memid = mention1.user.id

         if(!warn[memid]) warn[memid] = {
             warns: 0,
             warn1: "None",
             warn2: "None",
             warn3: "None"
         };

         if(warn[memid].warns === 3) {
        message.channel.send(mention1.user.username + " " + "has already 3 warnings!")
        message.delete(120)
         }

        if(warn[memid].warns !== 3) {
         warn[memid].warns++;
          fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
         }

          var reason = message.content.slice("+warn" + args[0])
          if(!reason) {reason = "Not given"}



          if(warn[memid].warns === 1) {
            warn[memid].warn1 = reason
              mention1.addRole(warn1)
              fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
          }
          if(warn[memid].warns === 2) {
            warn[memid].warn2 = reason
              mention1.addRole(warn2)
              fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
          }
          if(warn[memid].warns === 3) {
            warn[memid].warn3 = reason
            mention1.addRole(warn3)
            fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
        }
        }
    }

    if(command === "warninfo") {
        const warn = JSON.parse(fs.readFileSync("./warnings.json"))
        var mention1 = message.mentions.members.first();
        var memid = mention1.user.id
        var em1 = new discord.RichEmbed(); var em2 = new discord.RichEmbed(); var em3 = new discord.RichEmbed();

        em1.setTitle("Warn Info :" + " " + mention1.user.username)
        .addField("Warn Count", warn[memid].warns)
        .addField("Warning 1", warn[memid].warn1)
        .setFooter("Warn Check")

        em2.setTitle("Warn Info :" + " " + mention1.user.username)
        .addField("Warn Count", warn[memid].warns)
        .addField("Warning 1", warn[memid].warn1)
        .addField("Warning 2", warn[memid].warn2)
        .setFooter("Warn Check")

        em3.setTitle("Warn Info :" + " " + mention1.user.username)
        .addField("Warn Count", warn[memid].warns)
        .addField("Warning 1", warn[memid].warn1)
        .addField("Warning 2", warn[memid].warn2)
        .addField("Warning 3", warn[memid].warn3)
        .setFooter("Warn Check")

        if(warn[memid].warns == 1) {
            message.channel.send(em1)
        }
        if(warn[memid].warns == 2) {
            message.channel.send(em2)
        }
        if(warn[memid].warns == 3) {
            message.channel.send(em3)
        }
    }

})

client.on("ready", () => {
    console.log("staff Cmd ready")
})

client.login(run.token)