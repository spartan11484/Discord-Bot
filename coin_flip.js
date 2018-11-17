const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
  constructor(client)
  {
    super(client,{
      name: 'flip',
      group: 'simple',
      memberName: 'flip',
      description: 'Coin flipper'
    });
  }
  async run(message, args)
  { //message would be the "$play", args would be song request
    var chance = Math.floor(Math.random()*2);
    if(chance == 0){
      message.reply("Heads");
    }
    else{
      message.reply("Tails");
    }
  }
}
module.exports = CoinFlipCommand;
