const schema = mongoose.Schema({
    guildID: String,
    time: String,
    log: String,
});
module.exports = mongoose.model("Prime", schema)
