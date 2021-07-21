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
  run: async (bot, message, args, dev) => {


let button = new MessageButton()
  .setStyle('url')
  .setURL('https://npmjs.com/discord-buttons') 
  .setLabel('My First URL Button!'); 

message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);


  /*const embed = new Discord.MessageEmbed()
  .setColor(Color)
  .setTitle(bot.reva.get(data.lang, "general","invite"))
  .setDescription(`[Anti Vandalism Premium]()\n[Anti Vandalism](https://discord.com/api/oauth2/authorize?client_id=711328570374619207&permissions=8&scope=bot)`)

 message.channel.send(embed);*/
     }
 }
