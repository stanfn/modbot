const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete(4500)

    let args2 = args.join(" ")
    if (!args2.length) {
		return message.channel.send(`No question provided!`).then(msg => msg.delete(4500))
	}
let ball = ["It is certain.","It is decidedly so.","Without a doubt.","Yes – definitely.","You may rely on it."," As I see it, yes.","My reply is no.","My sources say no.","Outlook not so good.","Reply hazy, try again.","Very doubtful.","Signs point to yes."]

let embed = new Discord.RichEmbed()
.setAuthor('Magic 8Ball', 'https://magic-8ball.com/assets/images/magicBallStart.png')
.setDescription(ball[Math.floor(Math.random() * parseInt(12))])
.setColor('RANDOM')
await message.channel.send(embed).then(msg => msg.delete(5000))

}
