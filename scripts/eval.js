const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const run = require('./cfg.json');
const fs = require('fs');

client.on("ready", () => {
    console.log('Eval Ready')
})

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

  client.on("message", message => {
    if (message.guild === null) return;
    const args = message.content.split(" ").slice(1);
  
    if (message.content.startsWith(config.prefix + "eval")) {
      if(message.author.id !== config.ownerID) return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
  
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
  });

client.login(run.token);
