//=============================== - [ Consts ] - ===================================//
const Discord = require("discord.js");
const bot = new Discord.Client();
const db = require('quick.db')
const { Color } = require("./config.js");
const antilinks = require('./models/antilinks');
const fs = require("fs");
const request = require("request");
const prefix = "s!";
const { Collection, MessageEmbed } = require("discord.js");
const beautify = require("js-beautify");
const { inspect } = require("util");
let dev = ["738478465870987425","386188491953799178"];
const cmd = require("node-cmd");
const { I18n } = require("locale-parser");
bot.reva = new I18n({ defaultLocale: "en" });

global.logChannel = bot.channels.cache.get("835968578699264011")
global.mongoose = require('mongoose')
mongoose.connect("mongodb+srv://antivandalism:reman1234@cluster0.prbzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to the Mongodb database.");
}).catch((err) => {
  console.log("Unable to connect to the Mongodb database. Error:" + err);
});
global.Guild = require("./data/guild.js");
global.User = require("./data/user.js");
global.Lang = require("./data/lang.js");
global.Owner = require("./data/owner.js");
bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.catagories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handler/${handler}`)(bot);
});

/**/
let util = require("util"),
  readdir = util.promisify(fs.readdir);

const init = async () => {
  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  console.log(`Loading a total of ${evtFiles.length} events.`, "log");
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = new(require(`./events/${file}`))(bot);
    bot.on(eventName, (...args) => event.run(...args, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
};
init();

bot.on("ready", () => {
  console.log(`[!]-------------------------------------[!]`);
  console.log(`Display Name : ${bot.user.username}`);
  console.log(`Public Prefix : ${prefix}`);
  console.log(`Version : 4.0.0`);
  console.log(`[!]-------------------------------------[!]`);
});

bot.on("ready", () => {
    function randomStatus() {
        let status = [`${bot.guilds.cache.size} Guilds - v2.7.3`, `s!help`, `The Av Development`]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: "PLAYING"});    
    }; setInterval(randomStatus, 5000)
})

////////

bot.on('message', message => {
  if(message.channel.type == 'dm'){
    if(message.author.id === bot.user.id) return;
    let log = bot.users.cache.get('738478465870987425')
    if(log) return log.send(message.content)
  }
})

//=============================== - [ ghostping ] - ===================================//


bot.on("message", (message) => {});

bot.on("messageDelete", (message) => {
  if (message.mentions.users.first()) {
    message.channel.send(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setTitle("GhostPing Detected!").setDescription(`**Offender**\n ${message.author} \n**Message Content** \n ${
        message.mentions.users.first().username
      }`
    ));
     
  }
});

bot.on("messageUpdate", (message, newMessage) => {
  if (message.mentions.users.first()) {
    if (newMessage.mentions.users.first()) return;
    message.channel.send(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif") .setTitle("GhostPing Detected!").setDescription(`**Offender**\n ${message.author} \n**Message Content** \n ${
        message.mentions.users.first().username
      }`
    ));
     
  }
});

           
////////

bot.on('message', async(message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'antiinvite-link on')) {
        if (message.author.id !== message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`This command is only for guildOwner`));
        message.channel.send(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`<a:true:836711495478804520> AntiInvite-Link Is **Enabled**`));
        antilinks.findOne({Guild: message.guild.id}, (err, doc) => {
            if(err) console.error(err);
            if(!doc) {
                let newLinks = new antilinks({
                    Guild: message.guild.id,
                    run: 'on'
                })
                newLinks.save();
                message.channel.send(``);
            } else {
                doc.run = 'on';
                doc.save();
                message.channel.send(``);
            }
        })}    
});

bot.on('message', async(message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'antiinvite-link off')) {
        if (message.author.id !== message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`This command is only for guildOwner`));
        message.channel.send(new Discord.MessageEmbed().setColor("#37383b").setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif").setDescription(`<a:false:836711508246659109> AntiInvite-Link Is **Disabled**`));
        antilinks.findOne({Guild: message.guild.id}, (err, doc) => {
            if(err) console.error(err);
            if(!doc) {
                let newLinks = new antilinks({
                    Guild: message.guild.id,
                    run: 'off'
                })
                newLinks.save();
                message.channel.send(``);
            } else {
                doc.run = 'off';
                doc.save();
                message.channel.send(``);
            }
        })
    }    
});
bot.on('message', async(message) => {
    let data = await antilinks.findOne({Guild: message.guild.id});
    if(data.run === 'off') return;
    if(data.run === 'on') {
        if(links(message.content) === true) {
            message.delete()       
            try {
                let muterole = message.guild.roles.cache.find(ro => ro.name === 'Muted');
                if(!muterole) {
                    message.guild.roles.create({
                        data: {
                            name: 'Muted',
                            color: '#0000000',
                            permissions: []
                        }
                    })
                } else {
                    message.guild.member(message.author).roles.add(muterole);
                }
            } catch(err) {
                console.log(err);
            }
    }
}
})

function links(str) {
    let regexp = /^(?:(?:discord.gg?|https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(regexp.test(str)) {
      return true;
    } else {
      return false;
    }
  }


//=============================== - [ Info ] - ===================================//

bot.on("message", async message => {
  if (message.content.startsWith(`<@${bot.user.id}>`)) {
    let help = new Discord.MessageEmbed()
      .setColor("#37383b")
      .setAuthor("The Av Development", "https://media.discordapp.net/attachments/829446297115033610/831559964165406771/image0.gif")
      .setThumbnail(bot.user.avatarURL())
      .setTitle("Anti Vandalism")
      .setDescription(`Hello: ${message.author.tag}\nDo you want protect your server invite me [Link](https://discord.com/api/oauth2/authorize?client_id=711328570374619207&permissions=8&scope=bot)\nTo show commands list type:\n ${prefix}help, ${prefix}help <command>`)
    message.channel.send(help);
  }
});
////////////

//=============================== - [ antimention ] - ===================================//


bot.on('message', message=>{
  let non = ['@here','@everyone']
  if(non.some(w => message.content.includes(w))){
    if(message.member.hasPermission("MENTION_EVERYONE")) return;
        var roled = message.guild.roles.cache.filter(r => r.name.toLowerCase() === 'muted').first();
        if(roled){
      message.member.roles.add(roled)
    }
    if(message.deletable){
      message.channel.send('').then(m => m.delete({timeout:5000}))
      message.delete()
    }
  }
})
//=============================== - [ antispam ] - ===================================//

const usersMap = new Map();
const LIMIT = 5;
const TIME = 6000;
const DIFF = 7000;

bot.on("message", async message => {
  if (!message.channel.guild) return;
  let guild = await Guild.findOne({ guildID: message.guild.id });
  if (!guild) { Guild.create({ guildID: message.guild.id }); }
  if (guild) {
    if (guild.spam.onoff === "off") return;
   let Ww = await Owner.findOne({ ownerCode: "738478465870987425" });
    if (Ww.worldWhitelist.find((c) => c.type === message.author.id)) return;
  if (message.author.id === message.guild.ownerID) return console.log("owner");
    if (guild.whitelist.find((c) => c.type === message.author.id))
      return console.log("whitelist");
    let pun = guild.punishment;
    if (message.author.bot) return;
    if (usersMap.has(message.author.id)) {
      const userData = usersMap.get(message.author.id);
      const { lastMessage, timer } = userData;
      const difference = message.createdTimestamp - lastMessage.createdTimestamp;
      let msgCount = userData.msgCount;
      if (difference > DIFF) {
        clearTimeout(timer);
        userData.msgCount = 1;
        userData.lastMessage = message;
        userData.timer = setTimeout(() => {
          usersMap.delete(message.author.id);
        }, TIME);
        usersMap.set(message.author.id, userData);
      } else {
        ++msgCount;
        if (parseInt(msgCount) >= LIMIT) {
          if (pun === "ban") {
            if (!message.member.bannable) return console.log(message.member.username + " I can't ban this man");
            message.channel.guild.members.cache
              .get(message.author.id)
              .ban()
            message.channel.bulkDelete(msgCount, true);
          } else if (pun === "kick") {
            if (!message.member.kickable) return console.log(message.member.username + " I can't kick this man");
            message.channel.guild.members.cache
              .get(message.author.id)
              .kick()
              .then(k => {
                logChannel.send(`**⇏${message.author.tag} is kicked because spaming in <#${message.channel.id}>**`)
                message.guild.owner.send(
                  `**⇏<@${message.author.id}> is kicked because spaming in channel**`
                );
              });
            message.channel.bulkDelete(msgCount, true);
          } else {
            message.channel.guild.members.cache
              .get(message.author.id)
              .kick()
              .then(k => {
                message.guild.owner.send(
                  `**⇏<@${message.author.id}> is kicked because spaming in channel**`
                );
              });
            message.channel.bulkDelete(msgCount, true);
          }
        } else {
          userData.msgCount = msgCount;
          usersMap.set(message.author.id, userData);
        }
      }
    } else {
      let fn = setTimeout(() => {
        usersMap.delete(message.author.id);
      }, TIME);
      usersMap.set(message.author.id, {
        msgCount: 1,
        lastMessage: message,
        timer: fn
      });
    }
  }
});

//=============================== - [ token ] - ===================================//
bot.login("NzExMzI4NTcwMzc0NjE5MjA3.XsBaWw.n2M2pwtAfR_4bC3bOakWjD-SvUM");
