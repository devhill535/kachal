const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "premium",
  aliases: ["prime"],
  description: "",
  usage: ["s!premium"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev) => {
 

   let premium = new Discord.MessageEmbed()
   .serColor(Color)
   .setDescription(`For security, a premium version that gives you more powerful features, you can get a premium for only $2.00, click here:[**server**](https://discord.gg/UUbBQubh7V), to get the premium:\n**Anti-Spam**\n
A new and powerful spam detect system stop anyone from trying to raid your server, the spam system will be able to kick or band a member and it will clear all the messages\n**Unbanall**\nHe can unban all people until they are banned form the server\n**Setlang**\n
You can change the language of the bot to the languages currently available in the bot`)
     message.channel.send(premium)
    }
}
