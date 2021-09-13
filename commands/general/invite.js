const fs = require("fs");
const Discord = require("discord.js")

const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
  name: "invite",
  aliases: ["invitelink"],
  description: "Use this command to get the invite link",
  usage: ["s!invite"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {


  let butn = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=711328570374619207&permissions=8&scope=bot') 
  .setLabel('Invite Link!')
 
 message.channel.send(`If you want protect your server invite me `, butn);
     }
 }
