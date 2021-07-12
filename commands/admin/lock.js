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
  

let channel = await message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.channel.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.channels.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;

  message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(bot.reva.get(data.lang, "admin","lock_message", { 
          channel: `<#${message.channel.id}>`
      })));
     });
   }
}
