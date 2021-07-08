const fs = require("fs");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");


module.exports = {
  name: "info",
  cmdHelp: "Get more information about the bot",
  cmdUsage: "s!about",
  cmdCatagory: "General",
  aliases: ["botinfo"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev) => {

const guild = await message.guild.fetch();
		const administrators = guild.members.cache.filter((m) => m.hasPermission("ADMINISTRATOR") && !m.user.bot);
		const moderators = guild.members.cache.filter((m) => !administrators.has(m.id) && m.hasPermission("MANAGE_MESSAGES") && !m.user.bot);
		const embed = new Discord.MessageEmbed()
		.setDescription(``)
		
		
					.addField("administators",  `${administrators} 🟢 | ${a.user.tag}`)
			 .addField("moderators", `${moderators} 🟠 | ${m.user.tag}`)
			 
message.channel.send(embed);
	}
}
