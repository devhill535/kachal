const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "kick",
  aliases: ["kicked"],
  description: "You can kick a member, or multiple members using this command",
  usage: ["s!kick [@User]"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "KICK_MEMBERS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","KICK_MEMBERS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (bot, message, dev) => {

    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`You Don't have the permission **KICK_MEMBERS**`));
        let user = message.mentions.members.first();
        let args = message.content.split(' ');
        if(!user || !args[1]) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Usage: s!kick [@User]`));
        if(message.mentions.users.size < 1) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Not found this member`));
        if(!message.guild.member(user).bannable) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`This member have role highst me can't kick`));
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`<:punish:836022893691011092> ${user} has been kicked`));
        user.kick();
    }
}
