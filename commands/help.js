const Discord = require('discord.js')
const embedcolor = require('../config.json').settings.embed_colour

module.exports.run = async (client, message, args) => {

const embed = new Discord.RichEmbed()
.setAuthor('Commands', message.guild.iconURL)
.addField('8ball', 'Ask a question.')
.addField('Avatar', 'Shows your avatar or the person you mention.')
.addField('Serverinfo', 'Information about the server.')
.addField('Whois', 'Information about you or the person you mention.')
.addField('Suggest', 'Suggest an idea.')
.addField('Membercount', 'How many members the server has.')
.addField('Say', 'The bot will repeat after you.')
.addField('Embedsay', 'The bot will repeat after you, just in embed form.')
.addField('Kick', 'Kick a user you mention.')
.addField('Ban', 'Ban a user you mention.')
.setColor(embedcolor)
.setFooter('Source: https://github.com/stanfn/modbot')
message.channel.send(embed)

}
