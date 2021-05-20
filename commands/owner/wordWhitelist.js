const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "devs",
  aliases: ["dv"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
    if (message.author.id === "738478465870987425") {
      let data = await Owner.findOne({ ownerCode: "738478465870987425" });
      if(!data) { Owner.create({ ownerCode: "738478465870987425" });} 
      /*
      worldWhitelist
      */
      
      if (args[1] === "add") {
        let user =
          message.guild.members.cache.get(args[2]) ||
          message.mentions.members.first();
        if (!user)
          return message.channel.send(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(
            `<@${message.author.id}> mention someone`
          ));
        if(!data.worldWhitelist.find((c) => c.type === user.id)){
        await Owner.findOneAndUpdate(
        {
          ownerCode: "738478465870987425",
        },
        {
          $push: {
            worldWhitelist: {
              type: user.id
            }
         },
        })     
        message.channel.send(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`<a:true:836711495478804520> ${user.user.username} Added to developer`));
          } else {
          message.channel.send(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`this man is whitelisted`));
          }
      } else if (args[1] === "remove") {
        let user =
          message.guild.members.cache.get(args[2]) ||
          message.mentions.members.first();
        if (!user)
          return message.channel.send(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(
            `<@${message.author.id}> mention someone`
          ));
        if(data.worldWhitelist.find((c) => c.type === user.id)){
        await Owner.findOneAndUpdate(
        {
          ownerCode: "738478465870987425",
        },
        {
          $pull: {
            worldWhitelist: {
              type: user.id
            }
         },
        })
        message.channel.send(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`<a:false:836711508246659109> ${user.user.username} Removed in developer`));
        } else {
        message.channel.send(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`<a:false:836711508246659109> ${user.user.username} Not in developer`));
        };
      } else if (!args[1]) {
        if (data.worldWhitelist.length === 0) return message.reply(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`No one developer!`));
       let arrayOfCustomCommands = data.worldWhitelist.map(w => `⇰ <@${w.type}>  - ${w.type}`)
        
        let embed = new Discord.MessageEmbed()
      .setTitle("Developer Bot")
      .setColor("#37383b")
      .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
      .setDescription(arrayOfCustomCommands.slice(0, 15).join('\n'));
      message.channel.send(embed);
      }
    }
  }
}
