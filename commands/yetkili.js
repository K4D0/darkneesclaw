const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**<a:emoji_3:814954858117333002> Darkness Claw Yetkili Komutları! <a:emoji_3:814954858117333002>**

🤬 **\`${client.ayarlar.prefix}mute-sistem\`
Chat ve Seste mute için güzel sistem

📖 \`${client.ayarlar.prefix}duyuru\`
**Yazı içeriğini oluşturabilirsin**

🌟 \`${client.ayarlar.prefix}yavaş-mod\`
**Darkness Claw üyelerinizin belirlediğiniz sürede bir mesaj yazmasını sağlar**

♻️ \`${client.ayarlar.prefix}rol arındır\`
Sunucunuzda ki tüm **rolleri** silerek yardımcı olur (**Sunucu Sahibi**)

🔒 \`${client.ayarlar.prefix}jail-sistem\`
Etiketlediğiniz Üyeyi karantina altına al

🚷 \`${client.ayarlar.prefix}ban-sistem\`
Etiketlediğiniz üyeyi sunucunuzdan **yasaklarsınız**

☄️ \`${client.ayarlar.prefix}toplu-rol-sistem\`
Toplu rol ile hem alıp hem de verebileceğiniz sistem

⏱ \`${client.ayarlar.prefix}sayaç-sistem\`**
**Giriş Çıkış**, **Sayaç** hem de **otomatik rol** aynı anda çalıştır

⚠️ **\`${client.ayarlar.prefix}yasak-tag-sistem\`
Sunucunuz için güvenliği arttırın

✨ \`${client.ayarlar.prefix}oto-isim-sistem\`
Sunucunuza giren kullanıcıya istediğiniz şekilde otomatik isim ile adlandırmış yapabilirsin
 
💻 \`${client.ayarlar.prefix}komut-mesaj-sistem\`**
Sunucunuz için istediğiniz kadar **komut & **cevap** oluşturabilirsin**

☢️ \`${client.ayarlar.prefix}fake-hesap-sistem\`
Sunucunuza giren kullanıcı **__5 gün__ içerisinde** hesabını oluşturmuş ise **cezalı** verir

🔐 \`${client.ayarlar.prefix}kanal-kilit\` **&** \`${client.ayarlar.prefix}kilit-aç\`
**Kanalı kilitlemenize yarar**

🚀 \`${client.ayarlar.prefix}sunucu-tema-sistem\`
Topluluk bağışları ile sunucu şablonlarına sahip ol! **${client.ayarlar.prefix}sunucu-kur** kullanabilirsin**

🗑 \`${client.ayarlar.prefix}sil [100]\`
**Darkness Claw bot kanaldaki mesajları siler**

♻️ \`${client.ayarlar.prefix}kanal arındır\`
Sunucunuzda ki tüm **kanalları** silerek yardımcı olur (**Sunucu Sahibi**)

🚓 **\`${client.ayarlar.prefix}kısıtlamalar\`**
**Selam, küfür, reklam, büyük harf,** içerikler vardır

💸 İninal Barkod NO: ❌
💸 Papara Hesap NO: \`yakında\`

**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yetkili'
};