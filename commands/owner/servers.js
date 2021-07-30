const fs = require("fs");
const { Color } = require("../../config.js");
const Discord = require("discord.js");
const ownerid = "738478465870987425";

module.exports = {
  name: "servers",
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: true,
  cooldown: 6000,
  run: async (bot, message, args) => {
    if (message.author.id == ownerid) {

message.channel.send(new Discord.MessageEmbed()
.setColor(Color)
.setTitle(`**Servers List**`)
.setDescription(client.guilds.cache.map(c => `**- ${c.name} | ${c.memberCount} Members
  ID - ${c.id}
  **`))
    }
  }
}
