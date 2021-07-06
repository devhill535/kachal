const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");
const ms = require('ms');
const { stripIndents } = require("common-tags");
const moment = require("moment-timezone");
 function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString();
    const min = Math.floor((ms / (1000 * 60)) % 60).toString();
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
    return `${days.padStart(1, "0")}-${hrs.padStart(2, "0")}-${min.padStart(
      2,
      "0"
    )}-${sec.padStart(2, "0")}`;
  }

module.exports = {
  name: "stats",
  aliases: ["botinfo"],
  description: "Get more information about the bot",
  usage: ["s!stats"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
 
    const created = moment(bot.user.createdAt).format("YYYY-MM-DD");
    
     let about = new Discord.MessageEmbed()
            .setColor(Color)
            .setDescription('editing!')

        return message.channel.send({ embed: about })
            .then(msg => {

       let embed = new Discord.MessageEmbed()
        .setTitle(bot.reva.get(data.lang, "general","about"))
        .setColor(Color)
        .setThumbnail(bot.user.displayAvatarURL())
        .setDescription(`**❯ Bot Name:** ${bot.user.username}\n**❯ Bot Id:** ${bot.user.id}\n**❯ Total Commands:** 25\n**❯ Bot Created At:** ${created}\n**❯ Bot Ping:** ${Math.round(bot.ws.ping)}ms\n**❯ Uptime:** ${ms(bot.uptime, { long: true })}\n**❯ Total Guilds:** ${bot.guilds.cache.size} Guilds\n**❯ Version:** 2.7.5`)

      return msg.edit({ embed })
    })
    }
}
