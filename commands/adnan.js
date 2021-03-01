
const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#a40000').setDescription(`**<a:emoji_5:814954933027733514> Darkness Claw <a:emoji_5:814954933027733514> 

Sap adnan lan bi sevgili bulun yazık!

Üzüldüm lann!

Aga beeee
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ado'],
  permLevel: 0
}
exports.help = {
  name: 'adnan'
};