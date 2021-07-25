const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unban",
  aliases: [""],
  description: "You can kick a member, or multiple members using this command",
  usage: ["s!unban <ID>"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "BAN_MEMBERS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","BAN_MEMBERS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (client, args, message, dev) => {

   if (!args[0])
      return message.channel.send(
        `Please give me member id`
      );

    if (isNaN(args[0])) return message.channel.send(`Please give me valid id`);

    if (args[0] === message.author.id)
      return message.channel.send(`You are already unban`);

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
        "Please give valid member id or member is not banned!"
      );


    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`**<@${Member.user.id}>** was successfully unbanned from the server`)
     

    return message.channel.send(embed);

    //End
  }
};
