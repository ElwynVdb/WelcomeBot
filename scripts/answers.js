const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");

client.on('ready', () => {
    console.log('Answers are ready');
})

client.on('message', (message) => {
   if (message.author === client.user) return;
  
var messageText = message.content.toUpperCase(); 
  
  if(messageText == "I DON'T LIKE PEPSI" || messageText == "I'M THIRSTY") {
      message.reply(" here have a coke!");
  }
  
  if(messageText == "I DON'T LIKE COKE") {
    message.reply(" well then, you get nothing you picky bastard!");
  }
  
  
  if (messageText == "WHO IS MUMBLES?") {
  message.channel.sendFile('https://cdn.discordapp.com/attachments/209620687818588161/279613536378945537/MUMBLES.png','MUMBLESNOTHATSTHEFUCKINGCARPETNO.png')
  }
  
   if (messageText == "+AVATAR") {
    message.channel.sendFile(message.author.avatarURL,'Avatar.png')
   }
   if (messageText == "I WANT WATER") {
     message.reply("have a water bottle you picky prick.")
   }
   if (messageText == "ished") {
       message.reply("who's that")
   }
    
 //Added "WHO MADE YOU?"
//Added "I DON'T LIKE WATER"
//Added "I DON'T LIKE MILK"
//Added "WHAT IS A MEW?"
//Added "WHAT IS MEW BOT?"
//Added sentence including"YOGSCAST"
//Added sentence start with"FORTNITE"
//Note - Anything starting with + is a command, most of these are tests, and will be removed if they do not work

if (messageText == "WHO MADE YOU?") {
    message.reply("Some lovely people by the name of Josia, Luke, Sub, Ished and Mew!")
}
if (messageText === "+NAMEMC") {
message.channel.sendMessage('https://namemc.com/'+args.join(" "))
};
if (messageText == "I DON'T LIKE WATER") {
message.reply("Milk?")
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
if (message.Include == "YOGSCAST") {
message.reply("Welcome to hell, again")
}
if (message.content.startsWith == "FORTNITE") {
message.channel.sendFile('https://thumbs.gfycat.com/FineDampGecko-size_restricted.gif', 'intensification.gif')
}

    }
);

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
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
  }




client.login(config.token);
  


