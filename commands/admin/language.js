const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "language",
  aliases: ["lang"], 
  description: "To change language", 
  usage: ["language <language>"],
  category: ["Moderation"],
  enabled: false,
  memberPermissions: [ "ADMINISTRATOR" ],	
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: false,
  cooldown: 15000,
  run: async (client, message, args, dev) => {
      if (!args[1])
        return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`You need to set language`));
      let data = await Lang.findOne({ guildID: message.guild.id })
      if (args[1].toLowerCase() === "english" || args[1].toLowerCase() === "kurdish") {
        data.language = args[1].toLowerCase();
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`
          Your server language is \`${data.language}\``
        ));
      data.save();
      } else if (args[1] === "list") {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Language list is :\n \`english\` ,\`kurdish\``));
      } else {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`
          Usage : s!language <language>`
        ));
     }
  }
}
