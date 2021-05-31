const fs = require("fs");
const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "invite",
  aliases: ["invitelink"],
  description: "Use this command to get the invite link",
  usage: ["s!invite"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
    const inviteLink = bot.config.inviteURL || `https://discordapp.com/oauth2/authorize?client_id=${this.bot.user.id}&scope=bot&permissions=2146958847`;

		if(args[0] && args[0] === "copy"){
			return message.channel.send(inviteLink);
		
const embed = new Discord.MessageEmbed()
 .setColor(Color)
 .setTitle(bot.reva.get(data.lang, "general","invite"))
 .setDescription(`[Anti Vandalism](https://discord.com/api/oauth2/authorize?client_id=711328570374619207&permissions=8&scope=bot)`)
.addField("Link bot", inviteLink)

message.channel.send(embed);
    }
}
              
		
		
		
