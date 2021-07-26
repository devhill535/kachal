const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
  name: "scan",
  aliases: ["sc"],
  description: "With our new spam detect system, prevent anyone from trying to raid your server",
  usage: ["s!antispam [on/off]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args) => {
 
if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) return message.channel.send(`This member can kick and ban`)


  }
}
