const fs = require("fs");
const Discord = require("discord.js")
const { MessageButton, MessageActionRow } = require("discord-buttons");
const { Color } = require("../../config.js");

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

  let button1 = new MessageButton()
  .setStyle('url')
  .setURL('https://i8.ae/VC8iz') 
  .setLabel('Invite Link!')

let button = new MessageButton()
  .setStyle('url')
  .setURL('https://i8.ae/53lTv') 
  .setLabel('Invite Link Premium!')

let row = new MessageActionRow()
  .addComponents(button1, button)
 return message.channel.send(`${bot.reva.get(data.lang, "general","invite")}`,row);
     }
 }
