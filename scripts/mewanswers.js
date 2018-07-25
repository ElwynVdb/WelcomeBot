const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");


//Mew 
 //Added "WHO MADE YOU?"
//Added "I DON'T LIKE WATER"
//Added "I DON'T LIKE MILK"
//Added "WHAT IS A MEW?"
//Added "WHAT IS MEW BOT?"
//Added sentence including"YOGSCAST"
//Added sentence start with"FORTNITE"
//Note - Anything starting with + is a command, most of these are tests, and will be removed if they do not work

client.on('ready', () => {
    console.log('Mew answers ready');
})

client.on('message', (message) => {
   if (message.author === client.user) return;
  
var messageText = message.content.toUpperCase();
  

if (messageText == "+creators") {
    message.reply("Some lovely people by the name of Josia, Luke, Sub, Ished and Mew!")
}
if (messageText == "I DON'T LIKE WATER") {
    const milk = client.emojis.find("name", "milk");
message.reply(`Milk? ${milk}`)
}
if (messageText == "I DON'T LIKE MILK") {
message.reply("Well then you don't survive you fussy shite!")
}
if (messageText == "WHAT IS A MEW?") {
message.reply("Mew is a pokémon... oh, you mean that one, he's uh, coder/texture hacker thing, for minecraft, discord, and nintendo games, just ignore him...")
}
if (messageText == "WHAT IS MEW BOT?") {
message.reply("We do not discuss Mew Bot")
}
if (messageText == "HEY MEW, HELP") {
    message.reply("do +help you fuckface")
    }
if (messageText == "OMIWA SHINDEIRU") {
    message.reply("NANI")
    }
if (messageText == "TOAST?") {
    message.reply("Mew thought it was unoriginal to do test complete.")
    }
if (messageText == "+TEST") {
   message.author.send("toast")
       }
    
})


client.on('message', message => {
    const gasp2 = client.emojis.find("name", "gasp2");
if (message.content.startsWith("FORTNITE") || message.content.startsWith('fortnite') || message.content.startsWith('Fortnite') ) {
    message.author.send('Did somebody say FORTNITE?')
    message.author.send('https://thumbs.gfycat.com/FineDampGecko-size_restricted.gif', 'intensification.gif');
    }
    else
    {
     if (message.content.includes('YOGSCAST') || message.content.includes('yogscast') ) {
            message.channel.send('Welcome to hell, again...')
        }
if (message.content.startsWith('Ali A') || message.content.includes('ALI A') || message.content.startsWith('ali a') || message.content.startsWith('aLi A') || message.content.startsWith('Ali a') || message.content.startsWith('ali A') || message.content.startsWith('AlI a') ) {
    message.channel.send(`${gasp2}`)
}
    }  

})

client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return;
    
    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if(message.content.indexOf(config.prefix) !== 0) return;
    
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "namemc") {
        const namemc = args.join(" ");
        message.channel.sendMessage(`https://namemc.com/${namemc}`)
    }
    if (command === "3DSkin") {
        const skinD = args.join(" ");
        message.channel.sendFile(`https://visage.surgeplay.com/full/512/${skinD}`)
    }
    if (command === "skin") {
        const skin = args.join(" ");
        message.channel.sendFile(`https://visage.surgeplay.com/skin/512/${skin}`)
    }
    if (command === "ytsearch") {
        const youtube = args.join(" ");
        message.channel.send(`https://www.youtube.com/results?search_query=${youtube}`)
        }
});



client.login(config.token);
