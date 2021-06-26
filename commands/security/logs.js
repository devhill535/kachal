const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "logs",
  aliases: ["logs"],
  enabled: true,			  
  memberPermissions: [ "MANAGE_CHANNELS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  prime: false,
  run: async (bot, message, args, dev, data) => {
  
    if (args[1]  === "logs"){
   let data = await Guild.findOne({guildID: message.guild.id})
   if(!data) return message.channel.send(`empty`)
      if(data) return message.channel.send(`
      + ${data.ban.user} UserID
      - AntiBan 
      - ${data.ban.lmite}\n\n
      
      
      + ${data.kick.user} UserID
      - Antikick
      - ${data.kick.lmite}\n\n
`)
      
      
     
   
   

   
  }}}
