const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "lockall",
  aliases: ["closeall"],
  description: "Locks all text channels from your server",
  usage: ["s!lockall"],
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
      .setDescription(bot.reva.get(data.lang, "admin","lockall_message"));
      message.react("<a:true:836711495478804520>");
      message.channel.send(embed);

    message.guild.channels.cache.filter(c => c.name).forEach(async channel => {
    channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
       });
    }
 }
