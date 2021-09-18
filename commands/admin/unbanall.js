const Discord = require("discord.js")
const { Color } = require("../../config.js");

module.exports = {
  name: "unbanall",
  aliases: ["unbandall"],
  description: "You can unban all the banned users",
  usage: ["s!unbanall"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "BAN_MEMBERS" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS" ],        
  ownerOnly: false,            
  cooldown: 6000,
  prime: true,
  run: async (bot, message, args, dev) => {

 
 if (message.member.hasPermission("ADMINISTRATOR")) {
                    message.guild.fetchBans().then(bans => {
                        if (bans.size == 0) { message.lineReplyNoMention("There are no banned users"); throw "No members to unban"};
                        bans.forEach(ban => {
                            message.guild.members.unban(ban.user.id);
                        });
                    }).then(() => message.lineReplyNoMention("Unbanned all users")).catch(e => console.log(e))
                } 
        }
      }
