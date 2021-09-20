const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");
const ms = require('ms');
const moment = require("moment"); 
require("moment-duration-format"); 
const os = require('os') 
const si = require('systeminformation'); 

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
  run: async (bot, message, args, dev) => {
 


 const created = moment(bot.user.createdAt).format("YYYY-MM-DD");

const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]"); 

const cpu = await si.cpu(); 
 


const stats = new Discord.MessageEmbed() 

.setColor(Color) 
.setThumbnail(bot.user.displayAvatarURL()) 
.setTitle("Whoami Stats")
.setDescription(`**= Statistics =**\n\n**Servers** : ${bot.guilds.cache.size}\n**Bot** :${bot.user.id}\n**Commands Count** : 19\n**Bot Created At** : ${created}\n**Ping** : ${Math.round(bot.ws.ping)}ms\n**Uptime** : ${duration1}\n\n**= System =**\n\n**CPU** : \n> **Cores** : ${cpu.cores}\n> **Model** : ${os.cpus()[0].model}\n> **Speed** : ${os.cpus()[0].speed} MHz\n**MEMORY** : \n> **Total Memory** : ${(os.totalmem() / 1024 / 1024).toFixed(2)} Mbps\n> **Free Memory** : ${(os.freemem() / 1024 / 1024).toFixed(2)} Mbps\n> **Heap Total** : ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} Mbps\n> **Heap Usage** : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mbps 
`)

   message.channel.send(stats);
    }
}
