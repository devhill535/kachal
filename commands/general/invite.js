const fs = require("fs");
const Discord = require("discord.js")
const { MessageButton } = require("discord-buttons");
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


  let butn = new MessageButton()
  .setStyle('url')
  .setURL('https://i8.ae/53lTv') 
  .setLabel('Invite Link!')
 
 message.channel.send(`${bot.reva.get(data.lang, "general","invite")}`, embed);
     }
 }
