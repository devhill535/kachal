const Discord = require("discord.js")
 module.exports = class {
 async run(guild, bot) {
 		const thanksEmbed = new Discord.MessageEmbed()			
                        .setAuthor("I'm leaving in your server !!")
 			.setDescription("If you have a report join this server https://discord.gg/DnEQJdTUsS")
 			.setColor("#2c2f33")
 			.setTimestamp();
 		guild.owner.send(thanksEmbed).catch(() => {});


 		const text = "Leaving guild **"+guild.name+"** guild member size **"+guild.members.cache.filter((m) => !m.user.bot).size+"** membres, guild bot size("+guild.members.cache.filter((m) => m.user.bot).size+" bots)";
                const logsEmbed = new Discord.MessageEmbed()
 			.setColor("#2c2f33")
 			.setDescription(text);
 		bot.channels.cache.get("853773470102061087").send(logsEmbed);     
 }};
