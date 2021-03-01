const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`İkram edeceğin istediğin kişiyi etiketlemelisin.`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://media.tenor.com/images/2562bee79c6de051dd1da55e3356c799/tenor.gif",
  "https://media.tenor.com/images/2562bee79c6de051dd1da55e3356c799/tenor.gif",
  "https://media1.tenor.com/images/fba7b443fa6ed21580536b66bc15cf79/tenor.gif?itemid=15160046",
  "https://media.tenor.com/images/322b8a11215f94657abc0dab9966b2b0/tenor.gif",
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Aç gözlü olma oğlum ikram ediceksin.')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisine kola ikram ediyor..**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kola'
};