const { MessageMenuOption, MessageMenu } = require("discord-buttons")

const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "test",
  aliases: ['pong'],
  description: "To show MS",
  usage: ["s!ping"],
  category: ["General"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 2000,
  run: async (client, message, args, dev) => {

let ruolo1 = new MessageMenuOption()
.setLabel("Ruolo1")
.setValue("ruoloUNO") //id dell'opzione se sceglie questo verrà eseguita l'opzione data (se creato un event)
.setDescription("Ottieni il ruolo numero 1") //Facoltativo
.setEmoji("💋") //inseriamo l'emoji dell'opzione (O predefinita o personalizzata la seconda si mette solo id)

let ruolo2 = new MessageMenuOption()
.setLabel("Ruolo2")
.setValue("ruoloDUE")
.setDescription("Ottieni il ruolo numero 2")
.setEmoji("💋")

let alldropdown = new MessageMenu()
.setID("alldropdown")
.addOption(ruolo1) //aggiunge l'opzione nel dropdown
.addOption(ruolo2)
.setMaxValues(2)
.setMinValues(1) //Anch'esso Facoltativo
.setPlaceholder("Scegli il ruolo più adatto a te!") //Massimo 50 caratteri

message.channel.send("Questo è un dropdown", alldropdown)

client.on("clickMenu", async (menu) => {
	menu.reply.defer()
	if(menu.values[0] === "ruoloUNO") {
		menu.channel.send("Bel numero, bravo!")
	}
})
}
}
