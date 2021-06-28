const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "logs",
  aliases: [""],
  enabled: true,			  
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","ADMINISTRATOR" ],		
  ownerOnly: false,			
  cooldown: 6000,
  guilOwnerOnly: true,
  prime: false,
  run: async (bot, message, args, dev) => {
  
   let data = await Guild.findOne({ guildID: message.guild.id })
   if(!data) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`Empty!`))
      if(data) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`

**Logs**\n\n

1.
**\`+ ${data.ban.user} UserID\`**
**\`- AntiBan\`**
**\`- Punish\`**: **${data.ban.lmite}**\n

2.
**\`+ ${data.kick.user} UserID\`**
**\`- Antikick\`**
**\`- Punish\`**: **${data.kick.lmite}**\n

3.
**\`+ ${data.channel.user} UserID\`**
**\`- AntiChannel\`**
**\`- Punish\`**: **${data.channel.lmite}**\n

4.
**\`+ ${data.role.user} UserID\`**
**\`- AntiChannel\`**
**\`- Punish\`**: **${data.role.lmite}**
`))
      
      }
   }
