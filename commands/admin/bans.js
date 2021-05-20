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
  run: async (bot, message, args, dev) => {

    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Server Ban List: **${bans.size}**`)))
      .catch(console.error)
   } 
}
