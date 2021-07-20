schema = mongoose.Schema({
  guildID: String,
  aRoles: { type: Array, default: [] },
  
  pStatus: { onoff : { type: String, default:  "off" }
  },
  
});
module.exports = mongoose.model("PublicRole", schema)
