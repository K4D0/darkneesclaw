const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`İkram edeceğin istediğin kişiyi etiketlemelisin.`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://giphy.com/stickers/glass-bottle-sugar-cane-cherry-soda-gibznzz6eg7psxNklh",
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Aç gözlü olma oğlum ikram ediceksin.')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisine soda ikram ediyor..**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'soda'
};