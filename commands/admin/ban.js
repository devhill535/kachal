const Discord = require('discord.js')
const { MessagEmbed } = require("discord.js");
module.exports = {
    name: "ban",
    aliases: ["band"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (client, args, message, dev) => {
   
      const mention = message.mentions.users.first()
    const reason = args.slice(1).join(' ')
    if (!mention) return message.reply('Mention a user.')
    if (!reason) return message.reply('No Reason specified.')
    if (
      message.member.roles.highest.position <=
      message.guild.member(mention).roles.highest.position
    )
      return message.reply('You cannot ban this user.')
    message.guild.members.ban(mention.id, {
      days: 7,
      reason: `Banned by: ${message.author.id} | Reason: ${reason}`,
    })
    message.channel.send(`<@${mention.id}> has been successfully banned.`)
  }
}
