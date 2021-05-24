const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "userinfo",
  aliases: ["user"],
  description: "Get more information about yourself",
  usage: ["s!userinfo"],
  category: ["General"],
  enabled: true,			    
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 2000,
  run: async (bot, message, args) => {

 let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
   
  
    let flags = message.flags.toArray();
    if(message.flags.toArray() < 1) flags = "None";
    let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";


      const embed = new MessageEmbed()
      .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
      .setColor(Color)
      .setThumbnail(member.user.displayAvatarURL())
      .addField("Username", member.user.tag, true)
      .addField("Nickname", `${nickname}`, true)
      .addField("User Id", `${member.id}`, true)
      .addField("Flags", `${flags}`, true)
      .addField("Joined At", member.joinedAt.toDateString())
      .addField("Created At", member.user.createdAt.toDateString())
      .addField("Roles", `Role ${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}: <@&${member._roles.join('> <@&')}>`)
   message.channel.send(embed);
 }
}
