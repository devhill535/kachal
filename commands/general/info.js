const fs = require("fs");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "info",
   aliases: ["botinfo"],
    enabled: true,
    memberPermissions: ["SEND_MESSAGES"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    ownerOnly: false,
    cooldown: 3000,
    run: async (bot, message, args, dev) => {

message.channel.send(`[Object]`).then(m => {

            const embed = new Discord.MessageEmbed()
        .setTitle(`${bot.user.username} Info`)
        .setColor(Color)
        .setTimestamp()
        .setThumbnail(bot.user.displayAvatarURL())
       .addField("**Total Guilds:**", `${bot.guilds.cache.size} Guilds`)
        .addField("**Uptime:**", `${duration(bot.uptime)}`)
        .addField("**Discord.js version:**", `v${Discord.version}`)
        .addField("**Arch:**", `${process.arch}`)
        .addField("**Platform:**", `${process.platform}`)
        .addField("**Memory Usage:**", `${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) /
            100} MB`)
        .addField("**Last Update at:**", `<t:${Math.floor(Date.now() / 1000)}>`)
      

      m.edit(embed);
    });
    }
}
