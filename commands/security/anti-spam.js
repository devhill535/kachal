const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "antispam",
  aliases: ["antispam"],
  description: "With our new spam detect system, prevent anyone from trying to raid your server",
  usage: ["s!anti spam [on/off]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 3000,
  prime: true,
  run: async (bot, message, args) => {
   if (args[1] === "spam") {
   let guild = await Guild.findOne({ guildID: message.guild.id });
     let num = args[2];
    if (args[2] === "on") {
      guild.spam.onoff = "on";
      guild.save();
      const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`<a:true:854842599444709386> You have **Enable** antispam`);
     return message.channel.send(embed);
     } else if (args[2] === "off") {
        guild.spam.onoff = "off";
        guild.save();
      const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`<a:false:854842600351334440> You have **Disable** antispam`);
     return message.channel.send(embed1);
    }
    const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`error syntax <a:false:854842600351334440>\n ${guild.prefix}antispam [on,off] `
        );
      return message.channel.send(embed2);
  }
}
}
