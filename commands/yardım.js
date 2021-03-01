
const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#a40000').setDescription(`**<a:emoji_5:814954933027733514> Darkness Claw Yardım Menüsü <a:emoji_5:814954933027733514> 

🤣 \`${client.ayarlar.prefix}eğlence\`
> Eğlence komutlarını gösterir!

👤 \`${client.ayarlar.prefix}kullanıcı\`
> Kullanıcı komutlarını gösterir!

🛠 \`${client.ayarlar.prefix}yetkili\`
> Yetkili komutlarını gösterir!

💾 \`${client.ayarlar.prefix}kayıt-sistemi\`
> Kayıt sistemini gösterir!

💸 İninal Barkod NO: ❌
💸 Papara Hesap NO: \`yakında\`
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['', 'y', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};