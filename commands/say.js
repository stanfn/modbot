const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete()

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Missing sufficient permissions!").then(m => m.delete(5000));
    }

    let args2 = args.join(" ")
    if (!args2.length) {
		return message.channel.send(`No message provided!`).then(msg => msg.delete(4500))
	}
    message.channel.send(args2)
        
    }