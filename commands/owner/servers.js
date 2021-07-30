


message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle(`**Servers List**`)
.setDescription(client.guilds.cache.map(c => `**- ${c.name} | ${c.memberCount} Members
  ID - ${c.id}
  **`))
    }
  }
