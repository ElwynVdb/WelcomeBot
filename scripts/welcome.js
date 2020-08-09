const discord = require('discord.js');
const client = new discord.Client();
const config = require("./config.json")
const run = require('./cfg.json');

client.on('ready', () => {
  console.log('Welcome/Leave Message enabled!')
})

client.on("guildMemberAdd", (member) => {
  if (member.guild.id !== run.guildid) return;
  var channel = config.welcomechannel
  const pepsi = client.emojis.find("name", "pepsi");
  var message = "And don't forget to check <#307553601642037249>!";
  member.guild.channels.find("name", channel).send(`${member.user}, Welcome to hell it's great here pull up a chair and have a pepsi! ${pepsi}\n${message}`);
  console.log(`# ${member.user.username} Joined`);
});

client.on("guildMemberRemove", (member) => {
  if (member.guild.id !== run.guildid) return;
  var channel = config.welcomechannel
  var membertag = member.user.tag.slice(0, -5)
  member.guild.channels.find("name", channel).send(`*Takes ${membertag}'s pepsi back*`);
  console.log(`# ${member.user.username} left`);
});


client.login(run.token); 
