const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "unlockall",
  aliases: ["openall"],
  description: "Unlocks all text channels from your server, not recommended",
  usage: ["s!unlockall"],
  category: ["Moderation"],
  enabled: true,              
  memberPermissions: [ "MANAGE_CHANNELS" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],        
  ownerOnly: false,            
  cooldown: 6000,
  run: async (bot, message, args, dev, data) => {
  
   
      const embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
      .setDescription(bot.reva.get(data.lang, "admin","unlockall_message"));
      message.channel.send(embed);

    message.guild.channels.cache.filter(c => c.name).forEach(async channel => {
    channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: true
      })
       });
    }
 }
