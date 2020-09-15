const Discord = require('discord.js')
const suggestionchannel = require('../config.json').settings.suggestions
const embedcolor = require('../config.json').settings.embed_color

module.exports.run = async (client, message, args) => {

    let args2 = args.join(" ")
    if (!args2.length) {
		return message.channel.send(`No suggestion provided!`);
    }

    let embed2 = new Discord.RichEmbed()
    .setAuthor('Suggestion Sent!', 'https://icon-library.com/images/tick-icon-png/tick-icon-png-17.jpg')
    message.channel.send(embed2)

let embed = new Discord.RichEmbed()
.setAuthor(`New Suggestion By ${message.author.tag}`, message.author.avatarURL)
.setDescription(args2)
.setColor(embedcolor)
await client.channels.get(suggestionchannel).send(embed).then(msg => {
     msg.react('✅')
     msg.react('❌')
})

}