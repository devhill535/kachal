const owner = "839133910079635489";

if (!owner.includes(message.author.id)) return;
let args = message.content.split(" ")[1];
if (!args) message.channel.send(new Discord.MessageEmbed()
.setColor(Color)
.setDescrpition(`Please type server id`));
let Guild = bot.guilds.cache.get(args);
if (!Guild) return message.channel.send(new Discord.MessageEmbed()
.setColor(Color)
.setDescription(`Invalid server id`));
Guild.leave();
message.channel.send(new Discord.MessageEmbed()
.setColor(Color)
.setDescription(`Done Leave **${Guild.name}**`)
.setFooter(bot.user.username)

  }
};
