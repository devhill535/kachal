const fs = require("fs");
const { Color } = require("../../config.js");
const Discord = require("discord.js");

module.exports = {
  name: "servers",
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: true,
  cooldown: 6000,
  run: async (bot, message, args) => {

let embed = new Discord.MessageEmbed()
.setColor(Color)
.setTitle("**Servers List**")
.setDescription(bot.guilds.cache.map(c => `**- ${c.name} | ${c.memberCount} Members
  ID - ${c.id}
  **`))
  
  message.channel.send(embed)
  }
}
