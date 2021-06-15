schema = mongoose.Schema({
    guildID: String,
    prefix: { type: String, default: "s!"},
    ban: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
   },
    kick: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
    },
    channelCreate: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
    },
    channelDelete: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
    },
    role: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
    },
    spam: {
        onoff: { type: String, default: "off"}      
    },
    bot: {
        onoff: { type: String, default: "on"}
    },
    punishment: { type: String, default: "ban"},
    whitelist: { type: Array, default: [] },
    time: { type: Number, default: 30}
});
module.exports = mongoose.model("Guild", schema)
