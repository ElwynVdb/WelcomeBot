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
if (messageText == "YOGSCAST") {
message.reply("Welcome to hell, again")
}
})

client.on('message', message => {
if (message.content.startsWith("FORTNITE") || message.content.startsWith('fortnite') ) {
    message.channel.sendFile('https://thumbs.gfycat.com/FineDampGecko-size_restricted.gif', 'intensification.gif')
    }
})