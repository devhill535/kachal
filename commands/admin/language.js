const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "lang",
  aliases: ["language"], 
  description: "To change language", 
  usage: ["s!lang <language>"],
  category: ["Moderation"],
  enabled: true,
  memberPermissions: [ "ADMINISTRATOR" ],	
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: false,
  cooldown: 15000,
  run: async (client, message, args, dev) => {
      if (!args[1])
        return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Usage : s!language [english/kurdish/arabic]`));
      let data = await Lang.findOne({ guildID: message.guild.id })
      if (args[1].toLowerCase() === "english" || args[1].toLowerCase() === "kurdish" || args[1].toLowerCase() === "arabic") {
        data.language = args[1].toLowerCase();
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`
          Your server language is **${data.language}**`
        ));
      data.save();
      } else if (args[1] === "list") {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Language list is :\n **english** ,**kurdish** ,**arabic**`));
      } else {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`
          Please Type\n \`s!lang english\` \n \`s!lang kurdish\` \n \`s!lang arabic\``
        ));
     }
  }
}
