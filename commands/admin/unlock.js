module.exports = {
  name: "unlock",
  aliases: ["open"],
  description: "Unlocks the current or selected text channels",
  usage: ["s!unlock"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "MANAGE_CHANNELS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (bot, message, args, dev, data) => {
 message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.channel.send(bot.reva.get(data.lang, "admin","unlock_message", { 
          channel: `<#${message.channel.id}>`
        }));
     });
   }
}
