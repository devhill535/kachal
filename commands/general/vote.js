const Discord = require("discord.js")
const { Color } = require("../../config.js");
const { MessageButton } = require("discord-buttons");

module.exports = {
  name: "vote",
  aliases: ["v"],
  enabled: false,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
   
 let butn = new MessageButton()
  .setStyle('url')
  .setURL('https://top.gg/bot/711328570374619207') 
  .setLabel('Vote Top.gg!')

return message.channel.send(`${bot.reva.get(data.lang, "general","vote")}`, butn);

  }
}
