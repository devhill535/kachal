const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "unlock",
  aliases: ["open"],
  description: "Unlocks the current or selected text channels",
  usage: ["s!unlock"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "MANAGE_CHANNELS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (bot, message, args, dev, data) => {
 message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(bot.reva.get(data.lang, "admin","unlock_message", { 
          channel: `<#${message.channel.id}>`
        })));
     });
   }
}
