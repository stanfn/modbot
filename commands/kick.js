const Discord = require('discord.js')
const logchannel = require('../config.json').settings.logs

module.exports.run = async (client, message, args) => {
const kickuser = message.mentions.members.first() || message.guild.members.get(args[0]);

if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message.reply("Missing sufficient permissions!").then(m => m.delete(5000));
}

if (!args[0]) {
    return message.reply("Please provide a person to kick.").then(m => m.delete(5000));
}

if (!args[1]) {
    return message.reply("Please provide a reason to kick.").then(m => m.delete(5000));
}

if (!kickuser) {
    return message.reply("The user is not in the server.").then(m => m.delete(5000));
}

if (kickuser.id === message.author.id) {
    return message.reply("You can't kick yourself!").then(m => m.delete(5000));
}

if (!kickuser.kickable) {
    return message.reply("Error: I cannot kick the person, maybe he has a higher role?").then(m => m.delete(5000));
}

const embed = new Discord.RichEmbed()
            .setAuthor(`Kick`, `${message.guild.iconURL}`)
            .addField('User Kicked:', '<@' + `${kickuser.id}` + '>' + '| <@' + `${kickuser.id}` + '>')
            .addField('Kicked By:', `${message.author} | ${message.author.id}`)
            .addField('Reason:', `${args.slice(1).join(" ")}`)
            .setColor("#ff0000")
            .setThumbnail(kickuser.user.avatarURL)
            .setTimestamp()
            kickuser.kick(args.slice(1).join(" ")).then(msg => msg.channel.send('Successfully kicked the user!'))
            .catch(err => {
                if (err) return message.channel.send(`Error: ${err}`)
            });

        logchannel.send(embed);

}