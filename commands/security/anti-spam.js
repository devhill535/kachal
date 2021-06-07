const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "antispam",
  aliases: ["anti-spam"],
  description: "With our new spam detect system, prevent anyone from trying to raid your server",
  usage: ["s!antispam [on/off]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 3000,
  run: async (bot, message, args) => {

   let guild = await Guild.findOne({ guildID: message.guild.id });
     let num = args[1];
    if (args[1] === "on") {
      guild.spam.onoff = "on";
      guild.save();
      const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`<a:true:836711495478804520> antispam status has been update to **on**`);
     return message.channel.send(embed);
     } else if (args[1] === "off") {
        guild.spam.onoff = "off";
        guild.save();
      const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`<a:false:836711508246659109> antispam status has been update to **off**`);
     return message.channel.send(embed1);
    }
    const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`error syntax <a:false:836711508246659109>\n ${guild.prefix}antispam [on,off] `
        );
      return message.channel.send(embed2);
  }
};
