const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
const config = require("./config.json");
const run = require("./cfg.json");
const warns = require("./warnings.json")

client.on("message", (message) => {
     
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    var Srole = message.guild.roles.find("name", config.modrole)
    var ASrole = message.guild.roles.find("name", config.adminrole)
    

    if(command === "warn") {

})

client.on("ready", () => {
    console.log("staff cmd ready")
})

client.login(run.token)