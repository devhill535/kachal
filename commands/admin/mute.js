const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "mute",
  aliases: ["muted"],
  description: "Mute mentioned member for a specified time",
  usage: ["s!mute [@User]"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "MUTE_MEMBERS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MUTE_MEMBERS","MANAGE_ROLES" ],		
  ownerOnly: false,			
  cooldown: 6000,
run: async (bot, message, args) => {

if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`You Don't have the permission **MUTE_MEMBERS**`));
let mention = message.mentions.members.first();
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!role) {
    message.guild.roles.create({
        data: {
            name: 'Muted',
            permissions: [],
            color: '#000000'
        }
    })
}
if(!mention) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Usage: s!mute [@User]`));
message.guild.channels.cache.forEach(c => {
c.updateOverwrite(role , {
SEND_MESSAGES: false, 
ADD_REACTIONS: false
});
});
mention.roles.add(role)
message.channel.send(new Discord.MessageEmbed().setColor(Color).setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`<:punish:836022893691011092> ${mention.user.tag} has been muted`))
    }
 }
