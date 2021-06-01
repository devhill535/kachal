schema = mongoose.Schema({	
	guildID: String,
	rStatus: { onoff: { type: String, default: "on" },
	}
	});
	module.exports = mongoose.model("AntiRole", schema)
