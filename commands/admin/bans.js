const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "bans",
  aliases: ["banlist"],
  description: "Get list of the bans on your server",
  usage: ["s!bans"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "BAN_MEMBERS" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS" ],        
  ownerOnly: false,            
  cooldown: 6000,
  run: async (bot, message, args, dev, data) => {

    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(bot.reva.get(data.lang, "admin","bans") + bans.size)))
      .catch(console.error)
   } 
}
