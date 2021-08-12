const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};
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

let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username == args[0]) || message.guild.members.cache.find(r => r.displayName == args[0]) || message.guild.members.cache.find(r => r.id == args[0]) || message.member;
////
let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
///
const bots = member.user.bot ? "True" : "False";
///
const deleted = member.deleted ? "True" : "False";
////
 let stat = member.presence.activities[0]
        let custom

        if (member.presence.activities.some(r => r.name === "Spotify")) {
            custom = "Listening to Spotify"
        } else if (stat && stat.name !== "Custom Status") {
            custom = stat.name
        } else {
            custom = "Nothing"
        }

        if (member.presence.activities.some(r => r.name !== "Spotify") && stat && stat.state !== null) {
            stat = stat.state
        } else {
            stat = "Nothing"
        }
/////
if (member.premiumSince) {
    boost = "Yes"
  } else {
    boost = "No"
  }
///

      const userFlags = member.user.flags.toArray();
      const embed = new MessageEmbed()
      .setColor(Color)
      .setThumbnail(member.user.displayAvatarURL())
      .addField("Username", `${member.user.username}`, true)
      .addField("Discriminator", `${member.user.discriminator}`, true)
      .addField("Nickname", `${nickname}`, true)
      .addField("User Id", `${member.id}`, true)
      .addField("Avatar Link", `[png](${member.user.displayAvatarURL({format: "png",dynamic: true})}) | [jpg](${member.user.displayAvatarURL({format: "jpg", dynamic: true})}) | [webp](${member.user.displayAvatarURL({format: "webp", dynamic: true})})`)
      .addField("Is Bot", `${bots}`, true)
      .addField("Activity", `${custom}`, true)
      .addField("Booster", `${boost}`, true)
      .addField("Flags", `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`, true)
      .addField("Deleted User" ,`${deleted}`, true)
      .addField("Join", member.joinedAt.toDateString())
      .addField("Creation", member.user.createdAt.toDateString())
      .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length} Roles: <@&${member._roles.join('> <@&')}>`)

  return message.lineReplyNoMention(embed);
 }
}
