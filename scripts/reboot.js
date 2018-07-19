const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");

client.on('ready',() => {
  console.log('Reboot command initilized');
})

  client.on('message', message => {
    if (message.author.id == "318821976372150272" || message.author.id == "338717002879336461") {
    switch(message.content.toLowerCase()) {
        case '-reboot':
            message.message.sendMessage("SWDTeam Member Requested Reboot");
            resetBot(message.channel);
            break;
      }
    }
  });

  // Turn bot off (destroy), then turn it back on
  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
  }

  client.login(config.token);