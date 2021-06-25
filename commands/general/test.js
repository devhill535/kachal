const Discord = require("discord.js")
module.exports = {
  name: "Davosqundar",
  aliases: [""],
  description: "To show server support",
  usage: ["s!support"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev) => {

message.channel.send(`Mn qundarm`);
    } 
}
