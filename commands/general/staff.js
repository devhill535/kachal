const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "staff",
  aliases: ["S"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {

const guild = await message.guild.fetch();
		const administrators = guild.members.cache.filter((m) => m.hasPermission("ADMINISTRATOR") && !m.user.bot);
		const moderators = guild.members.cache.filter((m) => !administrators.has(m.id) && m.hasPermission("MANAGE_MESSAGES") && !m.user.bot);
		const embed = new Discord.MessageEmbed()
		
			.addField(message.translate("general/staff:ADMINS"), (administrators.size > 0 ? administrators.map((a) => `${this.client.customEmojis.status[a.presence.status]} | ${a.user.tag}`).join("\n") :message.translate("general/staff:NO_ADMINS")))
			.addField(message.translate("general/staff:MODS"), (moderators.size > 0 ? moderators.map((m) => `${this.client.customEmojis.status[m.presence.status]} | ${m.user.tag}`).join("\n") : message.translate("general/staff:NO_MODS")))
			.setColor(Color)
		
		message.channel.send(embed);
	}

}
