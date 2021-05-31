const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "punishment",
  aliases: ["punish"],
  description: "Change the punishment type of the server",
  usage: ["s!punishment [kick/ban]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 4000,
  run: async (bot, message, args, dev) => {
   
    const embed1 = new Discord.MessageEmbed()
      .setColor(Color)
      .setDescription(`Choose **kick** or **ban**`);
      if (!args[1])
        return message.channel.send(embed1);
      let data = await Guild.findOne({ guildID: message.guild.id })
      if (args[1] === "kick" || args[1] === "ban") {
        data.punishment = args[1];
        const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`Successfully changed the Punishment to **${data.punishment}** <:punish:836022893691011092>`)
        message.channel.send(embed);
      data.save();
      } else {
        const embed2 = new Discord.MessageEmbed()
          .setColor(Color)
          .setTitle("<a:false:836711508246659109> Invalid Usage")
          .setDescription (
          `Please Type\n \`s!punishment ban\` \n \`s!punishment kick\``
        );
      return message.channel.send(embed2);
       }
    }};
