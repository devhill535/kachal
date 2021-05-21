const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");
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
  name: "about",
  aliases: ["botinfo"],
  description: "Get more information about the bot",
  usage: ["s!bout"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
 
    const created = moment(bot.user.createdAt).format("YYYY-MM-DD");

     
       let embed = new Discord.MessageEmbed()
        .setTitle(bot.reva.get(data.lang, "general","about"))
        .setColor(Color)
        .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
        .setThumbnail(bot.user.displayAvatarURL())
        .addField(`❕Bot Tag`,`${bot.user.tag}`)
        .addField(`💳Bot ID`,`${bot.user.id}`)
        .addField(`🔗Bot Prefix`,`[ s! ]`)
        .addField(`🔋Uptime`,`${duration(bot.uptime)}`)
        .addField(`🌐Guilds`,`${bot.guilds.cache.size}`)
        .addField(`🏓Ping`,`${Math.round(bot.ws.ping)}ms`)
        .addField(`🗃Version`,`2.7.3`)
        .addField(`📂Discord.js`,`${Discord.version}`)
      message.channel.send(embed);
    }
}
