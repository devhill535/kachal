const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "antikick",
  aliases: ["anti-kick"],
  description: "Prevent others from mass kicking your members",
  usage: ["s!antikick [number/on/off]"],
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
      guild.kick.onoff = "on";
      guild.save();
       const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
        .setDescription(`<a:true:836711495478804520> Anti-Kick Is **Enabled**`);
      return message.channel.send(embed);
     } else if (args[1] === "off") {
         guild.kick.onoff = "off";
         guild.save();
       const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
        .setDescription(`<a:false:836711508246659109> Anti-Kick Is **Disabled**`);
      return message.channel.send(embed1);
    }
    if (isNaN(num) || parseInt(num) < 1){
      const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
        .setTitle("<a:false:836711508246659109> Invalid Usage")
        .setDescription(`Please Type\n \`s!antikick on\` \n \`s!antikick off\` \n \`s!antikick\` **<number>**`
        );
      return message.channel.send(embed2);
    }
    guild.kick.lmite = num;
    guild.save()
    const embed3 = new Discord.MessageEmbed()
      .setColor(Color)
      .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
      .setDescription(`Successfully changed to ${guild.kick.lmite} <:punish:836022893691011092>
`);
    return message.channel.send(embed3);
  }
};
