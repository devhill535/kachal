schema = mongoose.Schema({
  guildID: String,
  pRoles: { type: Array, default: [] },
  
  pStatus: { onoff : { type: String, default:  "off" }
  },
  
});
module.exports = mongoose.model("PublicRole", schema)
