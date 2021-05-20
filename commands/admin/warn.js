const Discord = require("discord.js")
const db = require("quick.db");
const ownerID = ""
module.exports = {
  name: "warn",
  aliases: ["warn"],
  enabled: false,			    
  ownerOnly: true,			
  cooldown: 6000,
  run: async (bot, message, args, dev) => {

let reason = args.slice(1).join(` `);
      if(!reason) reason = 'Nothing..'

let warnPermErr = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("User permission error!")
        .setDescription("Sorry, you don't have permissions to use this!")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Please mention a valid member of this server`));
        
            
            member.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`You have been warned by <${message.author.username}> for this reason: ${reason}`))
            .catch(error => message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`Sorry <${message.author}> I couldn't n't warn because of : ${error}`)));
            let warnEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("**__Warn Report__**")
            .setDescription(`**<@${member.user.id}> has been warned by <@${message.author.id}>**`)
            .addField(`Reason`, `${reason}`)
            .addField(`Action`, `Warn`)

            message.channel.send(warnEmbed)

   }
}
