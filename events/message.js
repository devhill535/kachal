const Discord = require("discord.js")
/**/
module.exports = class {
async run(message,bot) {
  const data = {};
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let guild = await Guild.findOne({ guildID: message.guild.id });
  if(!guild) { Guild.create({ guildID: message.guild.id }); }
  data.guild = guild;
  let user = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
  if(!user) { User.create({ guildID: message.guild.id, userID: message.author.id });} 
  data.user = user;
  let lang = await Lang.findOne({ guildID: message.guild.id });
  if(!lang) { Lang.create({ guildID: message.guild.id });} 
  data.lang = lang.language
  if (guild) {
  if (!message.content.toLowerCase().startsWith(guild.prefix.toLowerCase())) return;
  let args = message.content.split(" ");
  const argsr = message.content
    .slice(guild.prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = argsr.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = bot.commands.get(cmd);
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));
  
  if (!message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return;
  if (!command.enabled) return await message.channel.send(new Discord.MessageEmbed().setColor("#2c2f33").setDescription(`This command is **Disable** for now`));
  let Ww = await Owner.findOne({ ownerCode: "738478465870987425" });
  data.ww = Ww;
  if (command.ownerOnly && !Ww.worldWhitelist.find((c) => c.type === message.author.id)) return await message.channel.send(new Discord.MessageEmbed().setColor("#2c2f33").setDescription(`This command is only for owner the bot`));
  if (command.guilOwnerOnly) {
      if (message.author.id !== message.guild.ownerID &&
       !Ww.worldWhitelist.find((c) => c.type === message.author.id)
      ) return message.channel.send(new Discord.MessageEmbed().setColor("#2c2f33").setDescription(`This command is only for guildOwner`));
	  }
  let neededPermissions = [];
	  if(!command.botPermissions.includes("EMBED_LINKS")){
		  command.botPermissions.push("EMBED_LINKS");
	  }
	  command.botPermissions.forEach((perm) => {
		  if(!message.channel.permissionsFor(bot.user).has(perm)){
			  neededPermissions.push(perm);
		  }
	  });
	 if(neededPermissions.length > 0){
		  return message.channel.send(`I don't have a ${neededPermissions.map((p) => `\`${p}\``).join(", ")} permissions`);
	  }
	  neededPermissions = [];
	  command.memberPermissions.forEach((perm) => {
		  if(!message.channel.permissionsFor(message.member).has(perm)){
			  neededPermissions.push(perm);
		  }
	  });
	  if(neededPermissions.length > 0){
		  return message.channel.send(`You don't have a ${neededPermissions.map((p) => `\`${p}\``).join(", ")} permissions`);
	 }
	  if (!bot.cooldowns.has(command.name)) {
		  bot.cooldowns.set(command.name, new Discord.Collection());
	  }
	  const now = Date.now();
	  const timestamps = bot.cooldowns.get(command.name);
	  const cooldownAmount = (/*command.cooldown ||*/ 7000); 
	  if (timestamps.has(message.author.id)) {
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
	if (now < expirationTime) {
		const timeLeft = (expirationTime - now)/ 1000;
		return message.channel.send(`Please wait ${timeLeft.toFixed(1)} second`).then(msg=> msg.delete({ timeout:timeLeft.toFixed(1)*1000 }));
	}
	  }
	  timestamps.set(message.author.id, now);
	  let prefix = guild.prefix;
	  if (command) command.run(bot, message, args, prefix, data, cmd);
	  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  }
  }
}
