const Discord = require('discord.js')
const { Color } = require("../../config.js");
 module.exports = {
   name: "ban",
   aliases: ["band"],
   description: "You can ban a member, or multiple members using this command",
   usage: ["s!ban [@User]"],
   category: ["Moderation"],
   enabled: true,			  
   memberPermissions: [ "BAN_MEMBERS" ],			
   botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","BAN_MEMBERS" ],		
   ownerOnly: false,			
   cooldown: 6000,
 run: async (bot, message, dev, data) => {
   
 if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`You Don't have the permission **BAN_MEMBERS**`));
          let user = message.mentions.members.first();


          let args = message.content.split(' ');
          if(!user || !args[1]) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Usage: s!ban [@User]`));
          if(message.mentions.users.size < 1) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Noy found this member`));
          if(!message.guild.member(user).bannable) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`This member have role highst me can't ban`));
          message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(user + bot.reva.get(data.lang, "admin","ban5")));
          user.ban({ reason: args[1] });
      }
  }
