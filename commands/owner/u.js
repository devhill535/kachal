const { Color } = require("../../config.js");
const Discord = require("discord.js");

module.exports = {
  name: "users",
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: true,
  cooldown: 6000,
  run: async (bot, message, args) => {
   

 let embed = new Discord.MessageEmbed()
.setColor(Color)
.setDescrpition(`${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users!`)
message.channel.send(embed);
 
}
}
