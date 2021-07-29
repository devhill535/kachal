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
     let about = new Discord.MessageEmbed()
            .setColor(Color)
            .setDescription('editing!')

        return message.channel.send({ embed: about })
            .then(msg => {
   const botssize = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => `**${i++}** - ${m.user.username}`);
    const embed = new Discord.MessageEmbed()
      .setTitle(bot.reva.get(data.lang, "general","botlist"))
      .setDescription(`${botssize.join("\n")}`)
      .setColor(Color)
    return msg.edit({ embed })
    })
      } 
}
