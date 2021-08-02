const Discord = require("discord.js")
module.exports = class {
 async run(guild, bot) {
 		const thanksEmbed = new Discord.MessageEmbed()			
                        .setAuthor("Thank you for adding me to your guild !")
 			.setDescription("To configure me,\n type **s!help** and look at the **Security** commands!.")
 			.setColor("#2c2f33")
 			.setTimestamp();
 		guild.owner.send(thanksEmbed).catch(() => {});


 		const text = "joined new guild **"+guild.name+"**, guild member size **"+guild.members.cache.size+"** membres, guild bot size( "+guild.members.cache.filter((m) => m.user.bot).size+" bots)";
                const logsEmbed = new Discord.MessageEmbed()
 			.setColor("#2c2f33")
 			.setDescription(text);
 		bot.channels.cache.get("850465538306998272").send(logsEmbed);     
 }};
