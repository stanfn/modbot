const Discord = module.require("discord.js");
const embedcolor = require('../config.json').settings.embed_color

module.exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(`Member Count:`, `${message.guild.iconURL}`)
    .setDescription(`**${message.guild.name}** has **${message.guild.memberCount}** members!`)
    .setColor(embedcolor)
    message.channel.send(embed)
}