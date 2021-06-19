const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
module.exports = {
  name: "shap",
  aliases: ["banfromserver","banuser"],
  description: "To ban user by mention or id",
  usage: ["ban @user","ban <user.id>"], 
  enabled: true,			
  memberPermissions: [ "BAN_MEMBERS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS", "ADD_REACTIONS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (client, message, args) => {
    if (message.deletable) message.delete();
    if (!args[0]) {
      return message
        .reply("Please mention or write the id of the user you wants to ban")
        .then(m => m.delete(5000));
    }
    const toKick =
      message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!toKick) {
      return message
        .reply("Search can't find the user")
        .then(m => m.delete(5000));
    }
    if (message.author.id === toKick.id) {
      return message.reply("You can't ban yourself").then(m => m.delete(5000));
    }
    if (!toKick.kickable) {
      return message
        .reply("The User has higher roles than me")
        .then(m => m.delete(5000));
    }
    const embed = new Discord.MessageEmbed()
      .setThumbnail(toKick.user.displayAvartarURL())
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp()
      .setDescription(stripIndents`**> Baned User: **${toKick} (${toKick.id})
            **> User that Baned: **${message.author} (${message.author.id})`);
    const promtEmbed = new Discord.MessageEmbed()
      .setAuthor("")
      .setDescription(`Will you ban **${toKick}**?`)
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp();
    message.channel.send(promtEmbed).then(async msg => {
      const emoji = await promptMessage(msg, message.author, 30, ["✅", "❎"]);
      if (emoji === "✅") {
        msg.delete();
        toKick.ban(args.slice(1).join(" ")).catch(err => {
          if (err)
            return message.reply(
              "An error Appeared ~~Because You did something silly!~~"
            );
        });
      } else if (emoji === "❎") {
        msg.delete();
        message.reply("Canceled baning that user").then(m => m.delete(5000));
      }
    });
  }
};
