await message.guild.members.fetch();
		const administrators = message.guild.members.cache.filter((m) => m.permissions.has("ADMINISTRATOR") && !m.user.bot);
		const moderators = message.guild.members.cache.filter((m) => !administrators.has(m.id) && m.permissions.has("MANAGE_MESSAGES") && !m.user.bot);
		const embed = new Discord.MessageEmbed()
			
			.addField("generalstaff", (administrators.size > 0 ? administrators.map((a) => `| ${a.user.tag}`).join("\n"))
			.addField("general:MODS", (moderators.size > 0 ? moderators.map((m) => `| ${m.user.tag}`).join("\n"))
			.setColor(Color)
		
		message.channel.send(embed);
	}

}
