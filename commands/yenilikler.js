
const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`**<a:dikkat:818893756903981056> Darkness Claw Yenilikleri <a:dikkat:818893756903981056>

<a:emoji_8:818893328673538079> \`${client.ayarlar.prefix}kuş-dili-çevirici\`
Kuş Diline Çevirir!

<a:emoji_8:818893328673538079> \`${client.ayarlar.prefix}nuke\`
Kanalı Silip Tekrar Oluşturur!

<a:emoji_8:818893328673538079> \`${client.ayarlar.prefix}öneri-sistemi\`
Öneri Sistemini Gösterir!

<a:emoji_8:818893328673538079> \`${client.ayarlar.prefix}aykutelmas\`
Aykut Elmas Sözü Atar!

<a:emoji_8:818893328673538079> \`${client.ayarlar.prefix}deprembilgi\`
Türkiyede Yaşanan Son 10 Depremin Bilgisini Atar!

💸 İninal Barkod NO: ❌
💸 Papara Hesap NO: \`yakında\`
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['news'],
  permLevel: 0
}

exports.help = {
  name: 'yenilikler'
};