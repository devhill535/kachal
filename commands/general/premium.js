const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "premium",
  aliases: [""],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
    
const embed = new Discord.MessageEmbed()
 .setColor(Color)
 .setTitle("Premium Info")
 .setDescription(`[Anti Vandalism Premium](https://discord.com/api/oauth2/authorize?client_id=813131436265046068&permissions=8&scope=bot)`)

message.channel.send(embed);
    }
}
              
		
		
