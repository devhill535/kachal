const userId = args[0];

    if (!userId) {
      return message.channel.send("Please provide a user id");
    }

    const bannedUser = await message.guild.members.unban(userId);

    message.channel.send(
      `**${bannedUser.username}** was successfully unbanned from the server.`
    );
  }
};
