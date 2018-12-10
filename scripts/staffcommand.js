const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
const config = require("./config.json");
const run = require("./cfg.json");

client.on("message", (message) => {
     
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.guild === null) return;
    if(message.author.bot) return;

    var Srole = message.guild.roles.find("name", config.modrole)
    var ASrole = message.guild.roles.find("name", config.adminrole)
    

    if(command === "warn") {
        const warn = JSON.parse(fs.readFileSync("./warnings.json"))
        var mention1 = message.mentions.members.first();
        let warn1 = message.guild.roles.find(r => r.name === "Warning 1")
        let warn2 = message.guild.roles.find(r => r.name === "Warning 2")
        let warn3 = message.guild.roles.find(r => r.name === "Warning 3")

        message.delete()

        if(message.member.hasPermission('MANAGE_CHANNELS')) {
            if(!mention1) {
                message.reply("Please mention a user to warn!")
                message.delete(30)
                return
        }

        if(!mention1) return;
           var memid = mention1.user.id
           var warngiven = message.author.username

         if(!warn[memid]) warn[memid] = {
             warns: 0,
             warn1: "No reason",
             warn2: "No reason",
             warn3: "No reason",
             warng1: "Unknown",
             warng2: "Unknown",
             warng3: "Unknown"
         };

         if(warn[memid].warns === 3) {
        message.channel.send(mention1.user.username + " " + "has already 3 warnings!")
        message.delete(30)
         }


        if(warn[memid].warns !== 3) {
         warn[memid].warns++;
          fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
         }

          var reason = args.join(" ").slice(22);
          if(!reason) {reason = "Not given"}



          if(warn[memid].warns === 1) {
            warn[memid].warn1 = reason
            warn[memid].warng1 = warngiven
              mention1.addRole(warn1)
              fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
          }
          if(warn[memid].warns === 2) {
            warn[memid].warn2 = reason
            warn[memid].warng2 = warngiven
              mention1.addRole(warn2)
              fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
          }
          if(warn[memid].warns === 3) {
            warn[memid].warn3 = reason
            warn[memid].warng3 = warngiven
            mention1.addRole(warn3)
            fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
        }
        }
    }

    if(command === "warninfo") {
        const warn = JSON.parse(fs.readFileSync("./warnings.json"))
        var mention1 = message.mentions.members.first();
        var em1 = new discord.RichEmbed(); var em2 = new discord.RichEmbed(); var em3 = new discord.RichEmbed();

         message.delete()

        if(message.member.hasPermission('MANAGE_CHANNELS')) {
        if(!mention1) {
            message.reply("Please mention a user to check warns!")
            message.delete(30)
    }
        
    if(!mention1) return;

    var memid = mention1.user.id

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

        var giv1 = new discord.RichEmbed(); var giv2 = new discord.RichEmbed(); var giv3 = new discord.RichEmbed();
        
        giv1.setTitle("Warninfo")
        .addField("Warning 1 by:", warn[memid].warng1)
        .setFooter("Warninfo")

        giv2.setTitle("Warninfo")
        .addField("Warning 1 by:", warn[memid].warng1)
        .addField("Warning 2 by:", warn[memid].warng2)
        .setFooter("Warninfo")

        giv3.setTitle("Warninfo")
        .addField("Warning 1 by:", warn[memid].warng1)
        .addField("Warning 2 by:", warn[memid].warng2)
        .addField("Warning 3 by:", warn[memid].warng3)
        .setFooter("Warninfo")

        if(!args[1]) {
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
    if(args[1] === "given") {
        message.delete()

        if(warn[memid].warns === 1) {
        message.channel.send(giv1)
        }
        if(warn[memid].warns === 2) {
            message.channel.send(giv2)
            }
            if(warn[memid].warns === 3) {
                message.channel.send(giv3)
                }
    }
}
    }

    if(command === "warnremove") {
        const warn = JSON.parse(fs.readFileSync("./warnings.json"))
        var mention1 = message.mentions.members.first();
        var em1 = new discord.RichEmbed(); var em2 = new discord.RichEmbed(); var em3 = new discord.RichEmbed();
        let warn1 = message.guild.roles.find(r => r.name === "Warning 1")
        let warn2 = message.guild.roles.find(r => r.name === "Warning 2")
        let warn3 = message.guild.roles.find(r => r.name === "Warning 3")

    message.delete()

 if(mention1){
        var memid = mention1.user.id
        if(message.member.hasPermission('MANAGE_CHANNELS')) {
          if(warn[memid].warns === 3) {
              warn[memid].warns = 2
             mention1.removeRole(warn3)
             fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
            return
          }
          if(warn[memid].warns === 2) {
            warn[memid].warns = 1
            mention1.removeRole(warn2)
            fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
            return;
         }
         if(warn[memid].warns === 1) {
            warn[memid].warns = 0
            mention1.removeRole(warn1)
            fs.writeFileSync("./warnings.json", JSON.stringify(warn, null , 4))
            return
         }



        }
    }
}

})

client.on("ready", () => {
    console.log("staff Cmd ready")
})

client.login(run.token)