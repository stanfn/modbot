const Discord = require("discord.js");
const embedcolor = require('../config.json').settings.embed_color

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed();
        if(!message.mentions.users.first()) {
            embed.setTitle(`${message.author.tag}'s Avatar:`);
            embed.setColor(embedcolor);
            embed.setTimestamp();
            embed.setImage(message.author.avatarURL);
            message.channel.send(embed);
        } else {
            let user = message.mentions.users.first();
            let user2 = user.avatarURL
            embed.setTitle(`${user.tag}'s avatar`);
            embed.setColor(embedcolor);
            embed.setTimestamp();
            embed.setImage(user2);
            message.channel.send(embed);
        }
    }