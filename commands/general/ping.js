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

        let pong = new Discord.MessageEmbed()
            .setColor(Color)
            .setDescription('Pong?')

        return message.channel.send({ embed: pong })
            .then(msg => {

                let embed = new Discord.MessageEmbed()
                   .setDescription(`**Bot**: ${bot.ws.ping}ms\n\n**Discord API**: ${Date.now() - date}ms\n\n**DB**: ${ping_db}ms`)
                   .setColor(Color)

                return msg.edit({ embed })

            })
    }
}
