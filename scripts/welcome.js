const discord = require('discord.js');
const client = new discord.Client();
const express = require('express');
const config = require("./config.json")

client.on('ready', () => {
    console.log('Welcome/Leave Message enabled!')
})

const getDefaultChannel = async (guild) => {
    // get "original" default channel
    if(guild.channels.has(guild.id))
      return guild.channels.get(guild.id)
  
    // Check for a "general" channel, which is often default chat
    if(guild.channels.exists("name", "general"))
      return guild.channels.find("name", "general");
    // Now we get into the heavy stuff: first channel in order where the bot can speak
    // hold on to your hats!
    return guild.channels
     .filter(c => c.type === "text" &&
       c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
     .sort((a, b) => a.position - b.position ||
       Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
     .first();
  }

  client.on("guildMemberAdd", (member) =>  {
    member.guild.channels.find("name", "general").send(`${member.user}, Welcome to hell it's great here pull up a chair and have a pepsi`);
  });

  client.on("guildMemberRemove", (member, message) =>  {
    member.guild.channels.find("name", "general").send(`${member.user} has left!`);
  });

  client.login(config.token);