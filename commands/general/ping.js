const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ping",
  aliases: ['pong'],
  description: "To show MS",
  usage: ["s!ping"],
  category: ["General"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 2000,
  run: async (bot, message, args, dev) => {

    
   let date = Date.now();
        let ping_db = await new Promise((r, j) => {
            require('mongoose').connection.db.admin().ping((err, result) => (err || !result) ? j(err || result) : r(Date.now() - date))
        });

        date = Date.now();

        message.channel.send("Time has run out!").then(msg =>{
setTimeout(function(){
msg.edit("Loading.")
},700)
setTimeout(function(){
msg.edit("Loading..")
},1000)
setTimeout(function(){
msg.edit("Loading..")
},1300)
setTimeout(function(){
msg.edit(new Discord.MessageEmbed()
                   .setDescription(`<:ping:828370866537758790> Bot: ${bot.ws.ping}ms \n<:api:836017379330228234> Discord API: ${Date.now() - date}ms \n<:file:836016653908705312> DB: ${ping_db}ms`)
                   .setColor(Color))
},6000)

               
            })
    }
}
