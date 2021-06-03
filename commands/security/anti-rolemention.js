fs = require("fs");
const Discord = require("discord.js");
 module.exports = {
   name: "anti-rolemention",
   aliases: ["antirolemention"],
   enabled: true,
   memberPermissions:{} ["SEND_MESSAGES"],
   botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
   ownerOnly: false,
   guilOwnerOnly: true,
   cooldown: 5000,
   run: async (bot, message, args) => {
     PublicRole.findOne({
       guildID: message.guild.id
     }, (err, p) => {
       let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
       if (!message.guild.ownerID.includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed()
         .setDescription(`*You are not the **owner** of the server. Only the owner can perform this action.*`)
         .setColor("BLACK"))
       if (role && args[1] !== "on" && args[1] !== "off") {
         if (!role) return message.channel.send(new Discord.MessageEmbed()
           .setDescription("Role not found")
           .setColor("BLACK"))
         if (p.pRoles.includes(role.id)) {
           p.pRoles = p.pRoles.filter(r => r != role.id)
           p.save()
           message.channel.send(new Discord.MessageEmbed()
             .setDescription(`${role} has been removed from public roles!`)
             .setColor("BLACK"))
         } else if (!p.pRoles.includes(role.id)) {
           p.pRoles.push(role.id)
           p.save()
           message.channel.send(new Discord.MessageEmbed()
             .setDescription(`${role} has been added tp public roles!`)
             .setColor("BLACK"))
         }
       } else if (args[1] == "on") {
         if (p.pStatus == "on") return message.channel.send(new Discord.MessageEmbed()
           .setDescription(`Status already is on`)
           .setColor("BLACK"))
         p.pStatus = "on"
         p.save()
         message.channel.send(new Discord.MessageEmbed()
           .setDescription(`Status has been updated to on!`)
           .setColor("BLACK"))
       } else if (args[1] == "off") {
         if (p.pStatus == "off") return message.channel.send(new Discord.MessageEmbed()
           .setDescription(`Status already is off`)
           .setColor("BLACK"))
         p.pStatus = "off"
         p.save()
         message.channel.send(new Discord.MessageEmbed()
           .setDescription(`Status has been updated to off!`)
           .setColor("BLACK"))
       } else if (!role && args[1] !== "on" && args[1] !== "off") {
         message.channel.send(new Discord.MessageEmbed()
           .setTitle("anti-roleMention")
           .setDescription(`${p.pRoles.length > 0 ? p.pRoles.map(c => `${message.guild.roles.cache.get(c)} - ${message.guild.roles.cache.get(c).name}` || "No roleMentions added yet!") : "No roleMention added yet!"}`)
           .setColor("BLACK"))
       }
     })
   }
 }
