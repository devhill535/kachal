const fs = require("fs");
const Discord = require("discord.js")
const bot = new Discord.Client();
require('discord-buttons')(bot);

module.exports = {
  name: "invite",
  aliases: ["invitelink"],
  description: "Use this command to get the invite link",
  usage: ["s!invite"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {


    message.buttons('Invite me', {
      buttons: [
        {
          style: 'green',
          label: 'Click to function!',
          id: 'click_to_function'
                }
                ]
    })
  }
  }
