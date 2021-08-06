const fs = require("fs");
const { Color } = require("../../config.js");
const Discord = require("discord.js");

module.exports = {
  name: "shard",
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: true,
  cooldown: 6000,
  run: async (bot, message, args) => {

let embed = new Discord.MessageEmbed()
.setColor(Color)
.setDescription(`Shard: ${bot.shards.cache.size}`)
  
  message.channel.send(embed)
  }
}
