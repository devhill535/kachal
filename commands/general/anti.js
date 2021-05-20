const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "anti",
  aliases: ["config"],
  description: "To show command limits the bot",
  usage: ["s!anti"],
  category: ["Security"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev) => {
  
  let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
      .setTitle("list of all Command Security")
      .setDescription(`Guardian: **antichannel, antirole, antiban, antikick, antispam, antibot**`)
  message.channel.send(embed); 
    }
}
