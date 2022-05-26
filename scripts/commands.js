const config = require("./config.json");

export const commandListener = (message) => {
   if (message.content.indexOf(config.prefix) !== 0) return;

   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();

   switch (command) {

      case "avatar":
         message.channel.sendFile(message.mentions.users.first() ? user.avatarURL : message.author.avatarURL, 'Avatar.png');
         break;

      case "botavatar":
         message.channel.sendFile(client.user.avatarURL, 'Avatar.png');
         break;

      case "servericon":
         message.channel.sendFile(message.guild.iconURL, 'ServerIcon.png');
         break;

      case "uptime":
         const date = new Date(client.uptime);
         const strDate = `Uptime: ${date.getUTCDate() - 1} days, ${date.getUTCHours()} hours, ${date.getUTCMinutes()} minutes, ${date.getUTCSeconds()} seconds`;
         message.channel.send(strDate);
         break;

      case "say":
         if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You don\'t have permission to use this!');
         const sayMessage = args.join(" ");
         message.delete().catch(console.error);
         message.channel.send(sayMessage);
         break;

         case "help":
            message.reply('I have sent a DM to you.').then(msg => { msg.delete(10000) }).catch(console.log);
            message.author.send(`Help Message:\n Prefix: ${config.prefix} `);
            message.author.send({
              embed: {
                color: 3447003,
                author: {
                  name: ("Welcome Bot"),
                  icon_url: ""
                },
                title: "Commands",
                url: "",
                description: "Get to know all the commands!",
                fields: [{
                  name: "help",
                  value: "This help embed"
                },
                {
                  name: "avatar",
                  value: "Get your or someone elses avatar"
                },
                {
                  name: "botavatar",
                  value: "Get's bot avatar"
                },
                {
                  name: "servericon",
                  value: "Get's server's icon"
                },
                {
                  name: "uptime",
                  value: "Shows for how long the bot is online."
                }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "© Welcome Bot"
                }
              }
            });
            break;
   }
}