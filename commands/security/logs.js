const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "logs",
  aliases: [""],
  enabled: true,			  
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  guilOwnerOnly: true,
  prime: false,
  run: async (bot, message, args, dev) => {
  
   let data = await Guild.findOne({ guildID: message.guild.id })
   if(!data) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`Empty!`))
      if(data) return message.lineReplyNoMention(new Discord.MessageEmbed().setThumbnail(message.guild.iconURL()).setColor(Color).setDescription(`

**Logs**\n\n

1.
**\`+ ${data.ban.user}\`**
**\`- AntiBan\`**
**\`- Punish\`**: **${data.ban.lmite}**\n
2.
**\`+ ${data.kick.user}\`**
**\`- Antikick\`**
**\`- Punish\`**: **${data.kick.lmite}**\n
3.
**\`+ ${data.channel.user}\`**
**\`- AntiChannel\`**
**\`- Punish\`**: **${data.channel.lmite}**\n
4.
**\`+ ${data.role.user}\`**
**\`- AntiRole\`**
**\`- Punish\`**: **${data.role.lmite}**
`))
      
      }
   }
