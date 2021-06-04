const Discord = require('discord.js')
const { MessagEmbed } = require("discord.js");
module.exports = {
    name: "ban",
    aliases: ["band"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (client, args, message, dev) => {
   
  if(message.member.hasPermission('BAN_MEMBERS')){
            let reason = args.slice(1).join(' ')

            const user = message.mentions.members.first()
            if(!user){
                const embed = new MessageEmbed()
                .setDescription(`<:emojino:796264735649300480> Please mention a member to ban!`)
                .setColor('ORANGE')
                .setFooter('Hope\'s Discord Cafe')
                .setTimestamp()
                message.channel.send(embed)
            }

            if(!reason) reason = 'No Reason Specified!'
            
            if(user.hasPermission('MANAGE_GUILD')){
                const embed = new MessageEmbed()
                .setDescription(`<:emojino:796264735649300480> That user is a mod/admin! I can't ban them!`)
                .setColor('ORANGE')
                .setFooter('Hope\'s Discord Cafe')
                .setTimestamp()
                message.channel.send(embed)
            } else {
                message.guild.members.ban(user.id, {days: 7, reason: reason})
                const embed = new MessageEmbed()
                .setDescription(`<:emojiyes:796264735833980968> Successfully banned <@${user.id}>!`)
                .setColor('ORANGE')
                .setFooter('Hope\'s Discord Cafe')
                .setTimestamp()
                message.channel.send(embed)
            }
        } else {
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:796264735649300480> You don't have permissions to use this command!`)
            .setColor('ORANGE')
            .setFooter('Hope\'s Discord Cafe')
            .setTimestamp()
            message.channel.send(embed)
        }
    }
}
