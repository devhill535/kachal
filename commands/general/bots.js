const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "bots",
  aliases: ["allbots"],
  description: "Get list of the bots on your server,no hidden bots anymore",
  usage: ["s!bots"],
  category: ["General"],
  enabled: true,			    
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
  
    let i = 1;
   const botssize = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.MessageEmbed()
      .setTitle(bot.reva.get(data.lang, "general","botlist", {{
        botSize: botsize}))
      .setDescription(`${botssize.join("\n")}`)
      .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
      .setColor(Color)
    message.channel.send(embed);
      } 
}
