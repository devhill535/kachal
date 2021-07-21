const Discord = module.require("discord.js");
const ms = require("ms"); //Make sure to install ms package

module.exports = {
  config: {
 name: "lockdown",
 category: "moderation",
 aliases: ["close", "lock"],
 description: "Start a timed lockdown in a channel",
  },
 run: async(client, message, args) => {
 const time = args.join(" ");
 if (!time) {
 return message.channel.send("Error:x: Enter a valid time period in `Seconds`, `Minutes` or `Hours` ")
 }
 if (!message.member.hasPermission("MANAGE_SERVER", "MANAGE_CHANNELS")) {
 return message.channel.send(`:recluse11: | You don't have enough Permisions `)

 }
 message.channel.overwritePermissions([
 {
 id: message.guild.id,
 deny : ['SEND_MESSAGES'],
 },
 ],);
 const embed = new Discord.MessageEmbed()
 .setTitle("Channel Updates")
 .setDescription(`:recluse5: ${message.channel} has been placed under lockdown for ${time} `)
 .setColor("FF0000");
 message.channel.send(embed)

 let time1 = (`${time}`)
 setTimeout(function(){
 message.channel.overwritePermissions([
 {
 id: message.guild.id,
 null: ['SEND_MESSAGES'],
 },
 ],);
 const embed2 = new Discord.MessageEmbed()
 .setTitle("Channel Updates")
 .setDescription(`Locked has been lifted in ${message.channel}`)
 .setColor("FF0000");
 message.channel.send(embed2);
 }, ms(time1));
 message.delete();
 }
}
