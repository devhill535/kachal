const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "lock",
  aliases: ["close"],
  description: "Locks the current or selected text channels",
  usage: ["s!lock"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "MANAGE_CHANNELS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (bot, message, args, dev, data) => {
       
      let reason = args.slice(1).join(` `);
      if(!reason) reason = 'Nothing..'
  message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(bot.reva.get(data.lang, "admin","lock_message", { 
          channel: `<#${message.channel.id}>`
        })));
     });
   }
}
