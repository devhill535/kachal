const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "antibot",
  aliases: ["anti-bot"],
  description: "Prevent others from adding bots to your server",
  usage: ["s!antibot [on/off]"],
  category: ["Security"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 3000,
  run: async (bot, message, args) => {
   let guild = await Guild.findOne({ guildID: message.guild.id });
     let num = args[1];
    if (args[1] === "on") {
      guild.bot.onoff = "on";
      guild.save();
        const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
        .setDescription(`<a:true:836711495478804520> Anti-Bot Is **Enabled**`);
     return message.channel.send(embed);
     } else if (args[1] === "off") {
         guild.bot.onoff = "off";
         guild.save();
        const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
        .setDescription(`<a:false:836711508246659109> Anti-Bot Is **Disabled**`);
     return message.channel.send(embed1);
    }
    const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
        .setTitle("<a:false:836711508246659109> Invalid Usage")
        .setDescription(`Please Type\n \`s!antibot on\` \n \`s!antibot off\`
`);
      return message.channel.send(embed2);
  }
};
