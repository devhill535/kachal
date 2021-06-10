const Discord = require("discord.js")
module.exports = class {
async run(guild, bot) {
		const thanksEmbed = new Discord.MessageEmbed()			
                        .setAuthor("Thank you for adding me to your guild !")
			.setDescription("To configure me,\n type **s!help** and look at the **Security** commands!.")
			.setColor("#2c2f33")
                        .setTimestamp();
		guild.owner.send(thanksEmbed);
