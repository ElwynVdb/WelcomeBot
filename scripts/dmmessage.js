const discord = require('discord.js');
const config = require("./config.json")
const run = require('./cfg.json');
const client = new discord.Client();

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") {
    message.channel.startTyping();
    setTimeout(() => {
      message.reply("Use me in SWD, or I'll steal your pepsi!").catch(console.error);
      message.channel.stopTyping();
    });
  }
});

client.login(run.token);
