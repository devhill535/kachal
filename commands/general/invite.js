const fs = require("fs");
const Discord = require("discord.js")
const disbut = require("discord-buttons");
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
  run: async (bot, message, args, dev) => {


let button = new disbut.MessageButton()
  .setLabel("This is a button!")
  .setID("button1")
  .setURL("https://discord.com/api/oauth2/authorize?client_id=813131436265046068&permissions=8&scope=bot")
  .setStyle("blurple");

message.channel.send(button);

  /*const embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setTitle(bot.reva.get(data.lang, "general","invite"))
  .setDescription(`[Anti Vandalism Premium](https://discord.com/api/oauth2/authorize?client_id=813131436265046068&permissions=8&scope=bot)\n[Anti Vandalism](https://discord.com/api/oauth2/authorize?client_id=711328570374619207&permissions=8&scope=bot)`)

 message.channel.send(embed);*/
     }
 }
