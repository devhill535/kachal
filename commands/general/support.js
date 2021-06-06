const Discord = require("discord.js")
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

message.channel.send(`This is a server support **Anti Vandalism** if you need help, enter the server - \n https://discord.gg/QaqmPG2WZX`);
    } 
}
