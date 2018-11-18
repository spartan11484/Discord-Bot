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

  let prefix = botconfig.prefix; //goes into the botconfig and grabs the prefix var.
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd == `${prefix}hello`){
    return message.channel.send("Greetings.") //replies greetings to the channel where sent.
  }

  if(cmd == `${prefix}join`){
    //insert code to allow bot to join the call
  }
});
bot.login('TOKEN')
