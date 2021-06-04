const Discord = require("discord.js")

module.exports = class {
async run(guild, bot) {
		const thanksEmbed = new Discord.MessageEmbed()			
                       .setAuthor("I'm leaving in your server !!")
			.setDescription("If you have a report join this server https://discord.gg/5RsPXCwG8c")
			.setColor("#2c2f33")
		guild.owner.send(thanksEmbed).catch(() => {});
    
	
		const text = "<a:false:836711508246659109> **__Leaving Old Guild__** \n **Guild Name**: "+guild.name+" \n **Guild Owner Name**: " + `${guild.owner.user.username}` + " \n **Guild Owner ID**: " + `${guild.owner.id}` + " \n **Guild Bots Size** ("+guild.members.cache.filter((m) => m.user.bot).size+" bots)";
		const logsEmbed = new Discord.MessageEmbed()
			.setColor("#2c2f33")
			.setDescription(text);
		bot.channels.cache.get("850465538306998272").send(logsEmbed);     
}};
