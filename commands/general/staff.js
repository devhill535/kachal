module.exports = {
  name: "staff",
  aliases: ["close"],
  enabled: true,			  
  memberPermissions: [ "MANAGE_MESSAGES","MANAGE_CHANNELS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
    const guild = await message.guild.fetch();
    const administrators = guild.members.cache.filter((m) => m.hasPermission("ADMINISTRATOR") && !m.user.bot);
    const moderators = guild.members.cache.filter((m) => !administrators.has(m.id) && m.hasPermission("MANAGE_MESSAGES") && !m.user.bot);
    const embed = new Discord.MessageEmbed()
      .setAuthor("")
      .addField("administrators.size > 0 ? administrators.map((a) =>", `${this.client.customEmojis.status[a.presence.status]} | ${a.user.tag}`).join("\n")
      .addField("moderators.size > 0 ? moderators.map((m) =>",  `${this.client.customEmojis.status[m.presence.status]} | ${m.user.tag}`).join("\n")
      .setColor("")
      .setFooter("");
    message.channel.send(embed);
    }
    
    }
