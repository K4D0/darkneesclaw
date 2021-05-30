const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Kayıt Sistem
__Tek komut ile kayıt ve isim yapabilirsin.__**

> \`${client.ayarlar.prefix}erkek-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}kız-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}yetkili-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}kayıtsız-role [@rolEtiket]\`

\`\`\`        [ Kapatma Komutları ]        \`\`\`
> 🗑️ **${client.ayarlar.prefix}erkek-sil**
> 🗑️ **${client.ayarlar.prefix}kız-sil**
> 🗑️ **${client.ayarlar.prefix}yetkili-sil**
> 🗑️ **${client.ayarlar.prefix}kayıtsız-sil**

\`\`\`İsim başına tag koyması için
.kayıt-tag 🚀
.kayıt-tag-kapat\`\`\``).setImage('')

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-sistemi'
};