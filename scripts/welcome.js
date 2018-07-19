const discord = require('discord.js');
const client = new discord.Client();
const express = require('express');
const config = require("./config.json")

client.on('ready', () => {
    console.log('Welcome/Leave Message enabled!')
})



  client.on("guildMemberAdd", (member) =>  {
    const pepsi = client.emojis.find("name", "pepsi");
    member.guild.channels.find("name", "general").send(`${member.user}, Welcome to hell it's great here pull up a chair and have a pepsi! ${pepsi}`);
    console.log(`${member.user} Joined`);
  });

  client.on("guildMemberRemove", (member, message) =>  {
    member.guild.channels.find("name", "general").send(`Takes ${member.user}s pepsi back!`);
    console.log(`${member.user} left `);
  });


  client.login(config.token);
               