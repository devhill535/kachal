const Schema = require('../../models/ghostping')

module.exports = {
  name: "ghostping-on",
  description: "Enable Anti Ghost Ping Module",
  enabled: true,
  run: async(client, message, args) => {
   Schema.findOne({ Guild: message.guild.id }, async(err) => {
    
      new Schema({ Guild: message.guild.id }).save()
      message.channel.send(`Anti Ghost Ping Module has been enabled.`)
    })
  }
}
