const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
  constructor(client)
  {
    super(client,{
      name: 'leave',
      group: 'music',
      memberName: 'leave',
      description: 'Allows bot to leave'
    });
  }
  async run(message, args)
  { //message would be the "$play", args would be song request
  if(message.guild.voiceConnection)
  {
    message.guild.voiceConnection.disconnect();
  }
  else {
    message.reply("Currently not in a channel.")
  }
    }
}
module.exports = LeaveChannelCommand;
