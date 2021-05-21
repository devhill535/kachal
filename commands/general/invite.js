const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "invite",
  aliases: ["invitelink"],
  description: "Use this command to get the invite link",
  usage: ["s!invite"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev) => {
    
const embed = new Discord.MessageEmbed()
 .setColor(Color)
 .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
 .setTitle(bot.reva.get(data.lang, "general","help_embed"))
 .setDescription(`[Anti Vandalism](https://discord.com/api/oauth2/authorize?client_id=711328570374619207&permissions=8&scope=bot)`)
message.channel.send(embed);
    }
}
