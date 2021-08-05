const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "anti",
  aliases: ["config"],
  description: "To show command limits the bot",
  usage: ["s!anti"],
  category: ["Security"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: true,
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
  const embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle(bot.reva.get(data.lang, "general","anti_embed"))
      .setDescription(`Type: [on,off,<number>]\n\nGuardian: **antichannel, antirole, antiban, antikick, antispam, antibot**`)
  message.channel.send(embed); 
    }
}
