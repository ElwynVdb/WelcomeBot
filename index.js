let config = require("./config.json")
let Eris = require('eris');
let c = new Eris.Client(config.token);


c.on('guildMemberAdd', (guild, member) => {
    c.createMessage(guild.defaultChannel.id, `${member.user.mention}, Welcome to hell its great here pull up a chair and have a pepsi.`);
});

c.on('error', console.log)

c.connect();
