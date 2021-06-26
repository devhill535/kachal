const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "log",
  aliases: [""],
  enabled: true,			  
  memberPermissions: [ "MANAGE_CHANNELS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  prime: false,
  run: async (bot, message, args, dev, data) => {
  
       if (args[0]  === "s"){
   let data = await Guild.findOne({ guildID: message.guild.id })
   if(!data) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`Empty!`))
      if(data) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setTitle("**Logs**").setDescription(`
+ \`${data.ban.user} UserID\`
- \`AntiBan\`
- \`Punish\`: **${data.ban.lmite}**\n
      
+ \`${data.kick.user} UserID\`
- \`Antikick\`
- \`Punish\`: **${data.kick.lmite}**\n

+ \`${data.channel.user} UserID\`
- \`AntiChannel\`
- \`Punish\`: **${data.channel.lmite}**\n
 
+ \`${data.role.user} UserID\`
- \`AntiChannel\`
- \`Punish\`: **${data.role.lmite}**
`))
      
      }
   }
}
