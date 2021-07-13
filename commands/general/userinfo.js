const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "userinfo",
  aliases: ["user"],
  description: "Get more information about yourself",
  usage: ["s!userinfo"],
  category: ["General"],
  enabled: true,			    
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 2000,
  run: async (bot, message, args) => {

let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.user.id.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
///
let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
///
const bots = member.user.bot ? "True" : "False";
////

let lastMessage
let lastMessageTime
/////
if (member.lastMessage) {
            lastMessage = member.lastMessage.content
            lastMessageTime = moment(member.lastMessage.createdTimestamp).format('MMMM Do YYYY, H:mm:ss a')
        } else {
            lastMessage = "None"
            lastMessageTime = "None"
        }

    

      const embed = new MessageEmbed()
      .setColor(Color)
      .setThumbnail(member.user.displayAvatarURL())
      .addField("Username", member.user.tag, true)
      .addField("Nickname", `${nickname}`, true)
      .addField("User Id", `${member.id}`, true)
      .addField("Is Bot", `${bots}`, true)
      .addField("Join", member.joinedAt.toDateString())
      .addField("Creation", member.user.createdAt.toDateString())
      .addField("Roles", `Role ${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}: <@&${member._roles.join('> <@&')}>`)
      .addField("LastMessage", `${lastMessage}`, true)
      .addField("LastMessageTime", `${lastMessageTime}`, true)
  message.channel.send(embed);
 }
}
