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

     let about = new Discord.MessageEmbed()
            .setColor(Color)
            .setDescription('editing!')

        return message.channel.send({ embed: about })
            .then(msg => {

       let embed = new Discord.MessageEmbed()
        .setTitle(bot.reva.get(data.lang, "general","about"))
        .setColor(Color)
        .setThumbnail(bot.user.displayAvatarURL())
        .setDescription(`
▪︎ Bot Tag: ${bot.user.tag}

▪︎ Bot ID: ${bot.user.id}

▪︎ Bot Developer:\nRobot.𝖲 𝖺 𝗄 𝗋 𝖺 𝗇#3799\nRobot.ProBot#1641

▪︎ Bot Prefix: [ s! ]

▪︎ Total Commands: 23

▪︎ Uptime: ${duration(bot.uptime)}

▪︎ Created At: ${created}

▪︎ Guilds: ${bot.guilds.cache.size}

▪︎ Ping: ${Math.round(bot.ws.ping)}ms

▪︎ Version: 2.7.5

▪︎ Discord.js: ${Discord.version}
`)

.setFooter(`by : ${message.author.tag}`)

      return msg.edit({ embed })
    })
    }
}
