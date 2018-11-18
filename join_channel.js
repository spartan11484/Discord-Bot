  const commando = require('discord.js-commando');

  class JoinChannelCommand extends commando.Command
  {
    constructor(client)
    {
      super(client,{
        name: 'join',
        group: 'music',
        memberName: 'join',
        description: 'Allows the bot to join'
      });
    }

    async run(message, args)
    {
      if(message.member.voiceChannel)
      {
        if(!message.guild.voiceConnection)
        {
          message.member.voiceChannel.join()
          .then(connection =>{
            message.reply("As you wish");
          })
        }
      }
      else
      {
        message.reply("You're nowhere to be found");
      }
    }
  }

module.exports = JoinChannelCommand;
