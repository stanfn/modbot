const Discord = require('discord.js')
const embedcolor = require('../config.json').settings.embed_color

module.exports.run = async (client, message, args) => {

    let textcat = message.guild.channels.filter((c) => c.type !== "category").size;
    let textchan = message.guild.channels.filter((c) => c.type === "text").size;
    let voicechan = message.guild.channels.filter((c) => c.type === "voice").size;
    let rolescount = message.guild.roles.size;
    let ownerr1 = message.guild.owner.user.tag

    let servericon = message.guild.iconURL;
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name}`, servericon)
    .addField("Owner", ownerr1, true)
    .addField("Region", message.guild.region, true)
    .addField('Text Categories:', textcat, true)
    .addField('Text Channels:', textchan, true)
    .addField('Voice Channels:', voicechan, true)
    .addField("Members", message.guild.memberCount, true)
    .addField('Roles:', rolescount, true)
    .setFooter(`ID: ${message.guild.id}`)
    .setColor(embedcolor)
    .setThumbnail(servericon)

    message.channel.send(embed);
}