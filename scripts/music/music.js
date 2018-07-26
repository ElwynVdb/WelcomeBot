const Discord = require('discord.js');
const bot = new Discord.Client();
const YTDL = require("ytdl-core");
const embed = new Discord.RichEmbed()
const config = require("./config.json");

const PREFIX = '//'; // Command Prefix

var voiceChannel = null;
var servers = {};

// List of commands in json format
var commands = [
  {
    command: "help",
    description: "",
    parameters: [],
    execute: function(message, params){
      var list_of_commands = "To run a command use the prefix, " + PREFIX + " , and attach one of the commands below. For example, " + PREFIX + "ping\n\n";
      var count = 1;
      var com, des;
      var commands_header = "__**Available commands**__\n\n"
      list_of_commands += commands_header;
      while (commands[count] != null){ // Goes through the list of commands
        com = "__**" + commands[count].command + "**__";// Gets the command
        des = commands[count].description;
        list_of_commands += com + ": " + des + "\n"; //Append the command to the string
        count++;
      }
      message.author.send(list_of_commands);// PMs the user the list of commands
    }
  },
  {
    command: "everydaybro",
    description: "Plays Everyday Bro",
    parameters:[],
    execute: function(message, params){
      var voiceChannel;

      if (!message.member.voiceChannel){ // User is not in a voice channel
        message.channel.send("You must be in a voice channel to use this command");
      } else {
        voiceChannel = message.member.voiceChannel; // Find the voice channel that the message was entered from
        voiceChannel.join().then(function(connection){ // Bot joins the voice channel
          playEverydayBro(connection, message);
        });
      }

    }
  },
  {
    command: "despacito2",
    description: "Not clear?",
    parameters:[],
    execute: function(message, params){
      var voiceChannel;

      if (!message.member.voiceChannel){ // User is not in a voice channel
        message.channel.send("You must be in a voice channel to use this command");
      } else {
        voiceChannel = message.member.voiceChannel; // Find the voice channel that the message was entered from
        voiceChannel.join().then(function(connection){ // Bot joins the voice channel
         playdespacito(connection, message);
        });
      }

    }
  },
  {
    command: "play",
    description: "Plays the given youtube link",
    parameters:['yt_link'],
    execute: function(message,params){

      if (!message.member.voiceChannel){ // User is not in a voice channel
        message.channel.send("You must be in a voice channel to use this command");
        return;
      }

      // If the queue is empty create one
      if (!servers[message.guild.id]){
        servers[message.guild.id] = {
          queue: []
        };
      }

      var server = servers[message.guild.id];
      server.queue.push(params[1]); // Adds a song to the queue

      if (!message.guild.voiceConnection){
        message.member.voiceChannel.join().then(function(connection){
          play(connection, message); // Start the player
        });
      }

    }
  },
  {
    command: "stop",
    description: "Stops playing music",
    parameters:[],
    execute: function(message, params){
      /*
      message.member.voiceChannel.join().then(function(connection){
        connection.disconnect();
      });*/
      if (message.guild.voiceConnection){
        message.guild.voiceConnection.disconnect();
      }
    }
  },
  {
    command: "skip",
    description: "Skips the current song",
    parameters:[],
    execute: function(message, params){
      var server = servers[message.guild.id];

      if (server.dispatcher){
        server.dispatcher.end();
      }
    }
  },
  {
    command: "queue",
    description: "Displays the current music queue",
    parameters:[],
    execute: function(message, params){
      var queue = "QUEUE:\n";
      var server = servers[message.guild.id];
      var count = 0;
      while(server.queue[count]){
        queue += (count + 1 ) + ". " + server.queue[count] + "\n";
        count++;
      }
      message.channel.send(queue);
    }
  },
  {
    command: "noinvite",
    description: "Drake's tweet from when he didn't get invited to Josh's wedding altered",
    parameters: ["word"],
    execute: function(message, params){
      var str = "True colors have come out today.\nMessage is loud and clear.Ties are\nofficially cut. I'll miss you brotha\n\nWhen you're not invited to\n" ;

      for (i = 1; i < params.length; i++){
        str += params[i] + " ";
      }
      str += " the message is clear...";
      message.channel.send(str);
    }
  }
];

function play(connection, message){
  var server = servers[message.guild.id];

  try{
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter:'audioonly'}));

    server.dispatcher.on('end', function(){ // On song end
      server.queue.shift(); //Remove first song from the queue
      if (server.queue[0]){ // Check if there are more songs in the queue
        play(connection, message); // Play next song
      } else {
        connection.disconnect(); // Disconnect bot when there are no more songs in the queue
      }
    });
  } catch(err){
    message.channel.send('Invalid link!');
    server.queue.shift();
  }
}

// Plays Everyday bro
function playEverydayBro(connection, message){
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL("https://www.youtube.com/watch?v=hSlb1ezRqfA", {filter:'audioonly'}));

  server.dispatcher.on(end, function(){
    connection.disconnect();
  });
}

// Plays despacito2 hours
function playdespacito(connection, message){
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL("https://www.youtube.com/watch?v=W3GrSMYbkBE", {filter:'audioonly'}));

  server.dispatcher.on(end, function(){
    connection.disconnect();
  });
}

bot.on('ready', () => {
  bot.user.setGame('Type ' + PREFIX + 'help')
});

bot.on('message', (message) => {
  var msg = message.content;
  var pre = msg[0] + "" + msg[1];

  if (pre == PREFIX){ // Check if a command has been executed
    execute_command(message, msg.substring(2));
  }
});

// Executes the command
function execute_command(message, text){
  var params = text.split(" ");
	var command = search_command(params[0]);

	if(command) {
		if(params.length - 1 < command.parameters.length) {
			message.reply("Insufficient parameters!");
		} else {
			command.execute(message, params);
		}
	} else{
    message.reply("Invalid command!");
  }
}

// Traverses the commands and tries to find the command specified by the user
function search_command(command_name) {
	for(var i = 0; i < commands.length; i++) {
		if(commands[i].command == command_name.toLowerCase()) {
			return commands[i];
		}
	}

	return false;
}

bot.login(config.token);