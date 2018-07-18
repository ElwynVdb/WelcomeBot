const discord = require('discord.js');
const client = new discord.Client();
const express = require('express');
const config = require("./config.json")

client.on('ready', () => {
    console.log('Welcome/Leave Message enabled!')
})



  client.on("guildMemberAdd", (member) =>  {
    member.guild.channels.find("name", "general").send(`${member.user}, Welcome to hell it's great here pull up a chair and have a pepsi! :pepsi:`);
    console.log(`${member.user} Joined`);
  });

  client.on("guildMemberRemove", (member, message) =>  {
    member.guild.channels.find("name", "general").send(`Takes ${member.user}s pepsi back!`);
    console.log(`${member.user} left `);
  });

client.on('message', message => {
   if (message.author.id == "318821976372150272" || message.author.id == "338717002879336461") {
    switch(message.content.toLowerCase()) {
        case '-reboot':
            resetBot(message.channel);
        message.author.sendMessage("is this a thing?");
            break;
    }
   }
  });



  // Turn bot off (destroy), then turn it back on
  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting Welcome messages')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
  }





  client.login(config.token);
               