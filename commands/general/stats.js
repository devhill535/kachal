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
        .setDescription(`General`)
        .addField(`Bot Id: ${bot.user.id}`, `Commands Count: 25`)
        .addField(`Bot Created At: ${created}`, `Ping: ${Math.round(bot.ws.ping)}ms`)
        .addField(`Uptime: ${ms(bot.uptime, { long: true })}`, `Servers Count: ${bot.guilds.cache.size}`)
        .addField(`Invite Link`, `[Click here](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)`)
        .addField(`Server Support`, `[Click here](https://discord.gg/QaqmPG2WZX)`)
  return msg.edit({ embed })
    })
    }
}
