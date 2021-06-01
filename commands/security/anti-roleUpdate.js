const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: ["antiroleupdate"],
  aliases: ["anti-roleupdate"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 5000,
  run: async (bot, message, args) => {
    Antirole.findOne({
      guildID: message.guild.id
    }, (err, p) => {
      if (!p) return
      if (args[1] == "on") {
        if (p.rStatus == "on") return message.channel.send(new Discord.MessageEmbed()
          .setDescription(`Status already is on`)
          .setColor("BLACK"))
        p.rStatus = "on"
        p.save()
        message.channel.send(new Discord.MessageEmbed()
          .setDescription(`Status has been updated to on!`)
          .setColor("BLACK"))
      } else if (args[1] == "off") {
        if (p.rStatus == "off") return message.channel.send(new Discord.MessageEmbed()
          .setDescription(`Status arleady is off`)
          .setColor("BLACK"))
        p.pStatus = "off"
        p.save()
        message.channel.send(new Discord.MessageEmbed()
          .setDescription(`Status has been updated to off!`)
          .setColor("BLACK"))
      } else if (args[0] !== "on" || args[0] !== "off") return message.channel.send("Use on/off")
    })
  }
}
