const fs = require("fs");
const Discord = require("discord.js")
module.exports = {
  name: "staff",
  aliases: ["close"],
  enabled: true,			  
  memberPermissions: [ "MANAGE_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
    const guild = await message.guild.fetch();
    const administrators = guild.members.cache.filter((m) => message.hasPermission("ADMINISTRATOR") && !bot.user.bot);
    const moderators = guild.members.cache.filter((m) => !administrators.has(m.id) && message.hasPermission("MANAGE_MESSAGES") && !message.user.bot);
    const embed = new Discord.MessageEmbed()
      .setAuthor("")
      .addField("administrators.size > 0 ? administrators.map((a) =>", `| ${bot.user.tag}`).join("\n")
      .addField("moderators.size > 0 ? moderators.map((m) =>",  `| ${message.user.tag}`).join("\n")
      .setColor("")
      .setFooter("");
    message.channel.send(embed);
    }
    
    }
