const discord = require('discord.js');
const client = new discord.Client();
const express = require('express');
const config = require("./config.json")

client.on('ready', () => {
    console.log('Welcome/Leave Message enabled!')
})

client.on("guildMemberAdd", (member) =>  {
  const pepsi = client.emojis.find("name", "pepsi");
  var message = "And don't forget to check <#307553601642037249>!";
  member.guild.channels.get("217396856550981633").send(`${member.user}, Welcome to hell it's great here pull up a chair and have a pepsi! ${pepsi}`); 
  member.guild.channels.get("217396856550981633").send(`${message}`);
  console.log(`${member.user} Joined`);
});

client.on("guildMemberRemove", (member) => {
    var membertag = member.user.tag
    member.guild.channels.get("217396856550981633").send(`*Takes ${membertag}'s pepsi back*`);
    console.log(`${member.user} left `);
});

  client.login(config.token);     
