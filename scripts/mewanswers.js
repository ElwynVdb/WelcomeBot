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
   let args = message.content.split(" ").slice(1);
  

if (messageText == "+creators") {
    message.reply("Some lovely people by the name of Josia, Luke, Sub, Ished and Mew!")
}
if (messageText === "+NAMEMC") {
message.channel.sendMessage('https://namemc.com/'+args.join(" "))
};
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
if (messageText === "+3DSKIN") {
message.channel.sendFile('https://visage.surgeplay.com/full/512/'+args.join(" "),'askinforyouminecraftnerds.png')
};
if (messageText === "+SKIN") {
message.channel.sendFile('https://visage.surgeplay.com/skin/'+args.join(" "),'iswearimnotstealingfromsubimremakingwithsamewebsitesshutup.png')
};
if (messageText == "WHAT IS MEW BOT?") {
message.reply("We do not discuss Mew Bot")
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
if (message.content.startsWith('Ali A') || message.content.includes('ALI A') || message.content.includes('ali a') || message.content.includes('aLi A') || message.content.includes('Ali a') || message.content.includes('ali A') || message.content.includes('AlI a') ) {
    message.channel.send(`${gasp2}`)
}
    }  

})


client.login(config.token);
