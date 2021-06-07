const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");
module.exports = {
  name: "help",
  aliases: ["commands"],
  description: "To show you all command of the bot",
  usage: ["s!help","s!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
   
    if (!args[1]) {
  let embed = new Discord.MessageEmbed()
     .setColor(Color)
     .setTitle(bot.reva.get(data.lang, "general","help_embed"))
     .setDescription(`
[ Top.gg ](https://top.gg/bot/711328570374619207) - [ Invite ](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot) - [ Support ](https://discord.gg/QaqmPG2WZX) - [ Website ](https://zalmanti25.wixsite.com/my-site)
`)
     .addField("General Commands [8]", "`invite`, `support`, `about`, `userinfo`, `ping`, `serverinfo`, `bots`, `vote`")
     .addField("Moderation Commands [11]", "`kick`, `ban`, `lock`, `unlock`, `lockall`, `unlockall`, `prefix`, `clear`, `unbanall`, `mute`, `lang`")
     .addField("Security Commmands [4]", "`anti`, `settings`, `punishment`, `whitelist`")
  message.channel.send(embed)
       } else {
      let  command = args[1]
      if (bot.commands.has(command) || 
      bot.aliases.has(command)) {  
      
      command = bot.commands.get(command) || bot.aliases.get(command);
        let ccmd = "<:disable:840230135046471711> Disabled"
        if ( command.enabled ) {
        ccmd = "<:enable:840230134899671060> Enabled"
        }
      let embed = new Discord.MessageEmbed()
      .setColor(Color) 
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Help**")
      .setDescription(command.description || command.name + " this command don't have a description")
      .addField("**Usage**", "" + command.usage.join(", ") + "" )
      .addField("**Category**", "" + command.category.join(", ") + "" )
      .addField("**Command is**", ccmd);
      message.channel.send(embed)
        }
    }
  }};
