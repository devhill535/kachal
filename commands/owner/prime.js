module.exports = {
  name: "add-prime",
  aliases: ["prime"],
  enabled: false,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES" ],		
  ownerOnly: true,			
  cooldown: 1000,
  run: async (bot, message, args, dev) => {
    if (!args[1]) return;
    if (args[1]=== "time") {
      let data = await Prime.findOne({ guildID: message.guild.id });
      if (data) {
        if (data.log=== "enable") {
          let date = parseInt(data.time);
          
          let time = new Date(date)
          let Y = time.getFullYear(),
              M = time.getMonth(),
              D = time.getDate(),
              H = time.getHours(),
              m = time.getMinutes()
      message.channel.send(`prime bot in this server end in: ${Y}/${M}/${D} \`${H}:${m}\``)
          } else {
            message.channel.send("this server don't have a prime bot") 
          }
        }
      if (!data) {
          message.channel.send("this server don't have a prime bot")
        }
    } else if (args[1]=== "add") {
      let time = parseInt(args[2]);
      let total = time * 86400000;
      let time2 = Date.now() + total + 3600000;
      let data = await Prime.findOne({ guildID: message.guild.id });
      if (data) {
        data.time = time2;
        data.log = "enable";
        data.save()
      }
      if(!data) { Prime.create({
        guildID: message.guild.id,
        time: time2,
        log: "enable"
      }); } 
          let time0 = new Date(time2)
          let Y = time0.getFullYear(),
              M = time0.getMonth(),
              D = time0.getDate(),
              H = time0.getHours(),
              m = time0.getMinutes()
      message.channel.send(`prime bot in this server end in: ${Y}/${M}/${D} \`${H}:${m}\``)
          
    }
  }
}
