const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");
module.exports = {
    name: "staff",
    aliases: ["staffs"],
    description: "To show you all command of the bot",
    usage: ["s!help", "s!help <command>"],
    category: ["General"],
    enabled: true,
    memberPermissions: ["SEND_MESSAGES"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    ownerOnly: false,
    cooldown: 1000,
    run: async (bot, message, args) => {

        await message.guild.members.fetch();
        const administrators = message.guild.members.cache.filter((m) => m.permissions.has("ADMINISTRATOR") && !m.user.bot);
        const moderators = message.guild.members.cache.filter((m) => !administrators.has(m.id) && m.permissions.has("MANAGE_MESSAGES") && !m.user.bot);
        const embed = new Discord.MessageEmbed()

          .addField("generalstaff", `administrators.size > 0 ? administrators.map((a) => | ${a.user.tag}`).join("\n")
            .addField("general:MODS", `moderators.size > 0 ? moderators.map((m) => | ${m.user.tag}`).join("\n")
              .setColor(Color)

              message.channel.send(embed);
            }  

}
