const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('Darkness Claw Kayıt Sistemi').setDescription(`
\`${client.ayarlar.prefix}erkek-role\`
**Erkek rolünü seçersiniz.**

\`${client.ayarlar.prefix}kadın-role\`
**Kadın rolünü seçersiniz.**

\`${client.ayarlar.prefix}kayıtsız-role\`
**Kayıtsız rolünü seçersiniz.**

\`${client.ayarlar.prefix}yetkili-role\`
**Yetkili rolünü seçersiniz.**`)
.addField('ᅠ', 'ᅠ')
.addField('Kayıt Komutu', `${client.ayarlar.prefix}e-erkek, ${client.ayarlar.prefix}k-kadın`)
.addField('Örnek Kayıt Komut', `\`\`\`${client.ayarlar.prefix}e-erkek @etiket / ${client.ayarlar.prefix}k-kadın @etiket\`\`\``)
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