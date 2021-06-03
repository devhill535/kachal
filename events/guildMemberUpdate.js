const Discord = require("discord.js")	
	module.exports = class {
	async run(oldMember, newMember, bot) {
	
	Guild.findOne({
	guildID: newMember.guild.id
	}, async (err, guildData) => {
	if (guildData) {
	const entry = await oldMember.guild.fetchAuditLogs({ type: 'MEMBER_ROLE_UPDATE ' }).then(audit => audit.entries.first()) //Find audit logs pertaining to member update
	if (entry.executor.id === bot.user.id) return;
	if (entry.executor.id === newMember.guild.owner) return;
	if (oldMember.roles.cache.size < newMember.roles.cache.size) {
	
	newMember.roles.cache.forEach(async role => {
	if (!oldMember.roles.cache.has(role.id)) {
	if (guildData.roleupdate.onoff === "off") return;
	if (!entry) return;
	if (entry.executor.id === newMember.guild.ownerID) return
	let member = await newMember.guild.members.cache.get(entry.executor.id)
	newMember.roles.remove(role).catch(() => { return })
	member ? member.roles.cache.map(r => member.roles.remove(r).catch(() => { return })) : false
	return
	}
	}
	});
	}
	if (oldMember.roles.cache.size > newMember.roles.cache.size) {
	const entry = await oldMember.guild.fetchAuditLogs({ type: 'MEMBER_ROLE_UPDATE ' }).then(audit => audit.entries.first()) //Find audit logs pertaining to member update
	
	oldMember.roles.cache.forEach(async role => {
	if (!newMember.roles.cache.has(role.id)) {
	if (guildData.roleupdate.onoff === "off") return;
	if (!entry) return;
	if (entry.executor.id === newMember.guild.ownerID) return
	let member = await newMember.guild.members.cache.get(entry.executor.id)
	newMember.roles.add(role).catch(() => { return })
	member ? member.roles.cache.map(r => member.roles.remove(r).catch(() => { return })) : false
	return
	}
	}
	});
	}
	}
	})
  }
}
