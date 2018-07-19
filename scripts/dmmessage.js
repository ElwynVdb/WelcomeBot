const discord = require('discord.js');
const config = require("./config.js")
const client = new discord.client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;

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

    client.login(config.token);