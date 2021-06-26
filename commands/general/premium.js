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
 .setDescription(`
security has a premium version which gives you more powerful features, you can get premium for only **$2.00**, click here: [Server](https://discord.gg/UUbBQubh7V) , here is what you get from premium`)

message.channel.send(embed);
    }
}
              
		
		
