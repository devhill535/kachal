const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "vote",
  aliases: ["v"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev) => {
   
 const embed = new Discord.MessageEmbed()
 .setColor(Color)
 .setThumbnail(`https://cdn.discordapp.com/attachments/818177981884923964/843887454348247100/image0.png`)
 .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
 .setTitle("Thank you for voting me")
 .setDescription("[ Top.gg ](https://top.gg/bot/711328570374619207) \n - \n [ Discord.ly ](https://discord.ly/anti-vandalism)")

message.channel.send(embed);
  }
}
