const Discord = require("discord.js");
const moment = require('moment')
const embedcolor = require('../config.json').settings.embed_color

module.exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const member = message.guild.member(user);

    const roles = member.roles.map(r => `${r}`).join(', ')


    let embed = new Discord.RichEmbed();
            embed.setAuthor(`${user.tag}`, user.avatarURL)
            embed.setDescription(`${user}`)
            embed.addField('Joined:', `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
            embed.addField('Registered:', `${moment.utc(member.createdAt).format("dddd, MMMM Do YYYY")}`, true)
            embed.addField('Status:', `${member.presence.status}`, true)
            embed.addField('Roles:', roles)
            embed.setFooter(`ID: ${user.id}`)
            embed.setColor(embedcolor);
            embed.setTimestamp();
            embed.setThumbnail(user.avatarURL);
            message.channel.send(embed);
        
    }