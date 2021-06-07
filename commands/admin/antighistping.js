const Discord = require("discord.js");

module.exports = {
  name: "antighost",
  aliases: ["ghost"], 
  description: "To change language", 
  usage: ["s!lang <language>"],
  category: ["Moderation"],
  enabled: true,
  memberPermissions: [ "ADMINISTRATOR" ],	
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: false,
  cooldown: 15000,
  run: async (message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Sorry, you don\'t have the correct permissions to do that! `(MANAGE MESSAGES)`')
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Sorry, I don\'t have the correct permissions to do that! `(MANAGE MESSAGES)`')
        if (args = ['on']) {
            if (await db.has(`ghost-${message.guild.id}`) === false) {

                await db.set(`ghost-${message.guild.id}`, true),
                    message.channel.send('AntiGhostPing has been activated!')
            }
        }
        if (args = ['off']) {
            if (await db.has(`ghost-${message.guild.id}`) === true) {

                await db.delete(`ghost-${message.guild.id}`)
                message.channel.send('AntiGhostPing has been deactivated!')
            }

        }
    }
}
