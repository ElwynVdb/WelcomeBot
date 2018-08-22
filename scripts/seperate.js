// start discord.js init
const config = require("./config.json"); // See config.json below for example
const Discord = require("discord.js"); // Code below supports and is tested under "stable" 11.3.x
const client = new Discord.Client();
// end discord.js init

// Initialize **or load** the server configurations
const Enmap = require('enmap');
const Provider = require('enmap-sqlite');
// I attach settings to client to avoid confusion especially when moving to a modular bot.
client.settings = new Enmap({provider: new Provider({name: "settings"})});
// Just setting up a default configuration object here, to have somethign to insert.
const defaultSettings = {
  prefix: "+",
  modLogChannel: "mod-log",
  modRole: "Moderator",
  adminRole: "Administrator",
  welcomeChannel: "welcome",
  welcomeMessage: "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D"
}

client.on("guildCreate", guild => {
  // Adding a new row to the collection uses `set(key, value)`
  client.settings.set(guild.id, defaultSettings);
});

client.on("guildDelete", guild => {
  // Removing an element uses `delete(key)`
  client.settings.delete(guild.id);
});

client.login(config.token)