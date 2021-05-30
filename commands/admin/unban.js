 const Discord = require('discord.js')
const { MessagEmbed } = require("discord.js");
module.exports = {
    name: "unban",
    aliases: ["unband"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (bot, arge, message, dev) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

    if (!args[0])
      return message.channel.send(
        `Please Give Me Member ID That You Want To Unban!`
      );

    if (isNaN(args[0])) return message.channel.send(`Please Give Me Valid ID!`);

    if (args[0] === message.author.id)
      return message.channel.send(`You Are Already Unban!`);

    if (args[0] === message.guild.owner.user.id)
      return message.channel.send(`Server Owner Is Already Unban!`);

    if (args[0] === client.user.id)
      return message.channel.send(`I Am Already Unban!`);

    let FetchBan = await message.guild.fetchBans();

    let Member;
    Member =
      FetchBan.find(
        b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      FetchBan.get(args[0]) ||
      FetchBan.find(
        bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase()
      );

    if (!Member)
      return message.channel.send(
        "Please Give Valid Member ID Or Member Is Not Banned!"
      );

    let Reason = args.slice(1).join(" ") || "With out reason";

    try {
      message.guild.members.unban(Member.user.id, Reason);
    } catch (error) {
      return message.channel.send(
        `I Can't Unban That Member Maybe Member Is Not Banned Or Some Error!`
      );
    }

    let embed = new MessageEmbed()
      .setColor("BLUE")
     
      .setDescription(`<@${Member.user.id}> Unbanned from server`)
    

    return message.channel.send(embed);

   
  }
}
