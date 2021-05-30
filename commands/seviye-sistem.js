const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Açmak ve kapatmak için: [ +seviye aç / +seviye kapat ]').setDescription('>>> `+rank` `+rank [@Etiket]` `(+seviye - +level)`\n`+sıralama` `(+top - +toplist)`'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['seviye'],
  permLevel: 0
}

exports.help = {
  name: 'seviye-sistemi'
};