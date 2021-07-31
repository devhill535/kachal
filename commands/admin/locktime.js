const Discord = module.require("discord.js");
const ms = require("ms"); //Make sure to install ms package
const { Color } = require("../../config.js");

module.exports = {
  name: "locktime",
  aliases: [""],
  description: "Locks all text channels from your server",
  usage: ["s!lockall"],
  category: ["Moderation"],
  enabled: true,              
  memberPermissions: [ "MANAGE_CHANNELS", "MANAGE_SERVER" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "MANAGE_CHANNELS",  "MANAGE_SERVER" ],        
  ownerOnly: false,            
  cooldown: 6000,
  run: async (bot, message, args, dev) => {

 const time = args.join(" ");
 if (!time) {
 return message.channel.send("Error:x: Enter a valid time period in `Seconds`, `Minutes` or `Hours` ")
 }

 message.channel.overwritePermissions([
 {
 id: message.guild.id,
 deny : ['SEND_MESSAGES'],
 },
 ],);
 const embed = new Discord.MessageEmbed()
 .setTitle("Channel Updates")
 .setDescription(`${message.channel} has been placed under lockdown for **${time}** `)
 .setColor(Color)
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
  .setColor(Color)
  message.channel.send(embed2);
  }, ms(time1));
  message.delete();
 }
}
