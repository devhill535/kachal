const Discord = require("discord.js")
const { MessageButton } = require("discord-buttons");

module.exports = {
  name: "support",
  aliases: ["serversupport"],
  description: "To show server support",
  usage: ["s!support"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev) => {

let butn = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.gg/5RsPXCwG8c') 
  .setLabel('SafetyBot Server!')

message.channel.send(`This is a server support **Whoami** if you need help, enter the server`, butn);
    } 
}
