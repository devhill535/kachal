const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "scan",
  aliases: [],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 6000,
  run: async (bot, message, args, dev) => {
    const { guild, channel } = message,
    kickData = [],
      banData = [],
      pruneData = [],
      safeData = [];
    guild.roles.cache.forEach(role => {
      if (role.permissions.has("KICK_MEMBERS") && role.permissions.has("BAN_MEMBERS")) {
        pruneData.push(role.id);
      } else if (role.permissions.has("KICK_MEMBERS")) {
        kickData.push(role.id);
      } else if (role.permissions.has()) {
        pruneData.push(role.id);
      } else {
        safeData.push(role.id);
      }
      let x = "";
      pruneData.forEach(pruneD => {
        x += x + "<@&" + pruneD + ">\n";
      })
      await message.channel.send(x)
    })
  }
}
