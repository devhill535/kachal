const fs = require("fs");
const Discord = require("discord.js");
const Schema = require('../../models/ghostping')

module.exports = {
  name: "scan",
  aliases: ["sc"],
  description: "With our new spam detect system, prevent anyone from trying to raid your server",
  usage: ["s!antispam [on/off]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args) => {
 

    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`You do not have the permission \`MANAGE_SERVER\``)
    if(!message.channel.permissionsFor(message.guild.me).has(["SEND_MESSAGES"])) return message.member.send(`I do not have the permission \`MANAGE_SERVER\``)
      
    options = [
      'enable',
      'disable'
    ]

    if (!args.length) return message.channel.send("Please enter either **enable** or **disable**")
    const opt = args[0].toLowerCase();
    if (!opt) return message.channel.send('Please enter either **enable** or **disable**')


    if (!options.includes(opt)) return message.channel.send('Please enter either **enable** or **disable**')

   if(opt == 'enable') {
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data) return message.channel.send(`${client.emotes.error} **Anti Ghost Ping** Module is enabled already`)
      new Schema({
        Guild: message.guild.id
      }).save()
      message.channel.send(`${client.emotes.success} **Anti Ghost Ping** has been enabled.`)
    })
   }

   if(opt == 'disable'){
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(!data) return message.channel.send(`${client.emotes.error} **Anti Ghost Ping** is disabled already`)
      data.delete()
      message.channel.send(`${client.emotes.success}  **Anti Ghost Ping** has been disabled.`)
    })
   }

  }
}
