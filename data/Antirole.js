schema = mongoose.Schema({	
	guildID: String,
	rStatus: { onoff: { type: String, default: "off" },
	}
	});
	module.exports = mongoose.model("AntiRole", schema)
