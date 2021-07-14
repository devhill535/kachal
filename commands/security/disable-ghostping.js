const Schema = require('../../models/ghostping')

module.exports = {
  name: "ghostping-off",
  description: "Disable Anti Ghost Ping Module",
  enabled: true,
  run: async(client, message, args) => {
    Schema.findOne({ Guild: message.guild.id }, async(err) => {
   
      message.channel.send(`Anti Ghost Ping Module has been disabled. To enable Anti Ghost Ping Module, run \`enable-ghotstping\` command (includes server prefix)`)
    })
  }
}
