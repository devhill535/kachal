const fs = require("fs");
const Discord = require("discord.js");
const { MessageMenuOption, MessageMenu } = require("discord-buttons")
const { Color, Image, Footer, Author } = require("../../config.js");
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
   
    //if (!args[1]) {

  let cmduser = message.author;
  let menuoptions = [ 
    {
      value: "role1", description: "Get Role 1",
      replymsg: "This is the message for Role 1", emoji: "❌" //optional
    }, {
      value: "role2",  description: "Get Role 2",
      replymsg: "This is the message for Role 2", emoji: "✅" //optional
    } 
  ]
  //define the selection
  let selection = new MessageMenu()
    .setID('MenuSelection') 
    .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
    .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
    .setPlaceholder('Click me to make a Selection!');  //message in the content placeholder
  menuoptions.forEach(option => {
    let row = new MessageMenuOption()
      .setLabel(option.label ? option.label : option.value)
      .setValue(option.value) 
      .setDescription(option.description) 
      .setDefault() 
    if(option.emoji) row.setEmoji(option.emoji) 
    Selection.addOption(row)
  })
  //define the embed
  let menuembed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription("***Select what you need in the `Selection` down Below!***")
  //send the menu msg
  let menumsg = await message.channel.send(menuembed, selection)
  //function to handle the menuselection
  function menuselection(menu) {
    let menuoptiondata = menuoptions.find(v=>v.value == menu.values[0])
    menu.reply.send(menuoptiondata.replymsg, true);
  }
  //Event
  bot.on('clickMenu', (menu) => {
    if (menu.message.id === menumsg.id) {
      if (menu.clicker.user.id === cmduser.id) menuselection(menu);
      else menu.reply.send(`:x: You are not allowed to do that! Only: <@${cmduser.id}>`, true);
    }
  });













 /* let embed = new Discord.MessageEmbed()
     .setColor(Color)
     .setAuthor(Author)
     .setImage(Image)
     .setTitle(bot.reva.get(data.lang, "general","help_embed"))
     .setDescription(`
[ Top.gg ](https://top.gg/bot/711328570374619207) - [ Invite ](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot) - [ Support ](https://discord.gg/QaqmPG2WZX) - [ Website ](https://zalmanti25.wixsite.com/my-site)
`)
     .addField("General", "`invite`, `support`, `stats`, `userinfo`, `ping`, `serverinfo`, `bots`, `vote`, `premium`")
     .addField("Moderation", "`kick`, `ban`, `purge`, `unbanall`, `mute`, `lock`, `unlock`, `lockall`, `unlockall`")
     .addField("Config", "`setprefix`, `setlang`")
     .addField("Security", "`settings`, `punishment`, `whitelist`, `anti`, `logs`")
     .setFooter(Footer)
 return message.channel.send(embed);
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
    }*/
  }};
