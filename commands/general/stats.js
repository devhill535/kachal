const { MessageButton, MessageActionRow } = require("discord-buttons");
const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");
const ms = require('ms');
const { stripIndents } = require("common-tags");
const moment = require("moment-timezone");
 function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString();
    const min = Math.floor((ms / (1000 * 60)) % 60).toString();
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
    return `${days.padStart(1, "0")}-${hrs.padStart(2, "0")}-${min.padStart(
      2,
      "0"
    )}-${sec.padStart(2, "0")}`;
  }

module.exports = {
  name: "stats",
  aliases: ["botinfo"],
  description: "Get more information about the bot",
  usage: ["s!stats"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
 
    const created = moment(bot.user.createdAt).format("YYYY-MM-DD");
    
     
       let stats = new Discord.MessageEmbed()
        .setTitle("Security information")
        .setColor(Color)
        .setThumbnail(bot.user.displayAvatarURL())
        .addField('', [

				`Bot Id: ${bot.user.id}\nCommands Count: 20\nBot Created At: ${created}\nPing: ${Math.round(bot.ws.ping)}ms\nUptime: ${ms(bot.uptime, { long: true })}\nServers Count: ${bot.guilds.cache.size}`,
				
				''
			])

      
  
  let butn1 = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=828270556758540348&permissions=8&scope=bot') 
  .setLabel('Invite Link!')
 
let row2 = new MessageActionRow()
      .addComponents(butn1)

   return message.channel.send(stats,row2);
    }
}
