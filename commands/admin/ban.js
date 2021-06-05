const Discord = require('discord.js')
const { Color } = require("../../config.js");

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
    run: async (client, message, args, dev) => {
  
     let user = message.mentions.members.first()

    let perms = message.member.hasPermission("BAN_MEMBERS");
    if (!perms) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`You don't have **BAN_MEMBERS** permission`));

    if (!message.guild.me.permissions.has('BAN_MEMBERS'))
      return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`"I need **BAN_MEMBERS** permission!`));

    if (!user)
      return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`Usage: s!ban [@User]`)).catch(console.error);

    if (user.id === message.author.id) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`You can't ban yourself`));

    if (user.id === client.user.id) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`I can't ban myself`));

    if (message.guild.ownerID !== message.author.id && user.roles.highest.comparePositionTo(message.member.roles.highest) >= 0)
      return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`Based on the role hierarchy, you cannot ban this user`));

    if (razon.length > 100) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription('The reason cannot exceed 100 characters'));

    if (!message.guild.member(user).bannable) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`I cannot ban the mentioned user`));

  
    const embedBan = new Discord.MessageEmbed()
      .setColor(Color)
      .setDescription(`<:punish:836022893691011092> **${user}** has been banned`)

    message.channel.send(embedBan);

    const embedUserBan = new Discord.MessageEmbed()
      .setColor(Color)
      .setDescription(`<:punish:836022893691011092> **${user}** has been banned from **${message.guild.name}** server`)

    user.send(embedUserBan).catch(e => message.channel.send(''))

  }
}
