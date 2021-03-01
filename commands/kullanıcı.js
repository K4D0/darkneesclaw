const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://media.giphy.com/media/mBkM18U5OMSkTcDmeu/giphy.gif', 'https://media.giphy.com/media/RGRzukK0YNlQbZEUVP/giphy.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#0092ff').setDescription(`**Darkness Claw Kullanıcı Komutları!**

🐦 \`${client.ayarlar.prefix}avatar\`
**Kullanıcının profilinde ki fotoğrafı gösterir**

🐱 \`${client.ayarlar.prefix}afk\`
**Cihaz başında olmadığınız süre için kullanırsın**

☁️ \`${client.ayarlar.prefix}davet\`
**Darkness Claw bağlantılarını gönderir**

📋 \`${client.ayarlar.prefix}kurallar\`
**Darkness Claw hazır tema ile kurallarınızı yerleştirir**

😊 \`${client.ayarlar.prefix}emote\`
**Emoji URL veya Emoji girerek eğlenceli emojinin çizilimini atar**

🐝 \`${client.ayarlar.prefix}emoji\`
**Darkness Claw sunucunda ki emoji ismini yaz sana indirme bağlantısı verir**

🔞 \`${client.ayarlar.prefix}nsfw\`
**Cinsel içerikler içeride seni bekliyor**

❕ \`${client.ayarlar.prefix}çek [@etiket]\` **|** \`${client.ayarlar.prefix}kes [@etiket]\` **|** \`${client.ayarlar.prefix}git [@etiket]\`
**Belirli sesli kanalda ki kullanıcıyı yanına çekmeni sağlar ve kişiyi sesten atmanı sağlar. Seste yanına gitmeni sağlar**

🌈 \`${client.ayarlar.prefix}rol-renk\`
**Darkness Claw Telefon kullananlar için Rol Renk değiştirme**

⛔️ \`${client.ayarlar.prefix}sunucudan-ayrıl\`
**Darkness Claw ile kurmuş olduğunuz ayarlarınızı sıfırlayarak sunucundan çıkar**`).setThumbnail('https://media.giphy.com/media/3qXi5eIvcgCmTDObOU/giphy.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['user'],
  permLevel: 0
}

exports.help = {
  name: 'kullanıcı'
};