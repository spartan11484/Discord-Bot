const botconfig = require("./botconfig.json");
const Commando = require('discord.js-commando');
const bot = new Commando.Client({
commandPrefix: "$"
})


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.servers = {};

//what it says when the bot is online, declares what bot is doing in discord
bot.on("ready", async()=>{
  console.log(`${bot.user.username} fully functional.`)
  bot.user.setActivity("with 'inteligent' life")
});
//
bot.on("message", async message =>{
  if(message.author.bot) return; //makes sure bot is the one sending

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd == `$hello`){  //***this returns as an unknown command, but then will return greetings.***//
    return message.channel.send("Greetings.") //replies greetings to the channel where sent.
  }
});
bot.login('NTEzMTk0MDA5ODg4NTU1MDA4.DtIRKw.8F0qCooqxAm1TCGcvccmLwwGQqE')
