const Discord = require("discord.js");
let embedcolor = require('../config.json').settings.embed_color

module.exports.run = async (client, message, args) => {

    message.delete()

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Missing sufficient permissions!").then(m => m.delete(5000));
    }

    let args2 = args.join(" ")
    if (!args2.length) {
		return message.channel.send(`No message provided!`).then(msg => msg.delete(4500))
	}
    
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
    .setDescription(args2)
    .setColor(embedcolor)
    .setTimestamp()
    message.channel.send(embed).catch(err => {
        if (err) return message.channel.send(`Error: ${err}`)
    });
    }