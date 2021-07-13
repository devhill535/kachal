const Discord = require('discord.js')

module.exports = {
  name: "unban",
  aliases: [""],
  description: "You can kick a member, or multiple members using this command",
  usage: ["s!kick [@User]"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "BAN_MEMBERS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","BAN_MEMBERS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (client, message, args, dev) => {

const userId = args[0];

    if (!userId) {
      return message.channel.send("Please provide a user id");
    }

    const bannedUser = await message.guild.members.unban(userId);

    message.channel.send(
      `**${bannedUser.username}** was successfully unbanned from the server.`
    );
  }
};
