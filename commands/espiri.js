const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(':thinking:  Hemen Yazıyorum... :stuck_out_tongue_winking_eye: ').then(message => {
   var espriler = [
`**Senin adın ne ?

- Bill.

-Nerden bileyim be?**` ,
` **Bebeğe patik giydirmeye çalışmışlar ama giymemiş neden?

- Bebek antipatikmiş.** ` ,
` **Adamın kafasına buda heykeli düşmüş, başıma "buda mı gelecekti" demiş.** ` ,
` **Bacaktaki 10’a ne denir?
PANTOLON** ` ,
` **Rock yapmayan kişiye ne denir?
Yaprock.** ` ,
` **Ben Yedigün içiyorum sen Onbeşgün iç.** ` ,
` **Masada hangi örtü kullanılmaz?
Bitki Örtüsü.** ` ,
` **Yılanlardan korkma, yılmayanlardan kork.** ` ,
` **Baykuşlar vedalaşırken ne der?
Bay Bay Bay Kuş.** ` ,
` **Bir sınıftaki öğrencilerin hepsinin kilosu eşitmiş,

Çünkü EŞİT AĞIRLIK sınıfıymış.** `,
`**Ahmet Saz çaldı. Polis tutukladı.**`];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espiri'],
  permLevel: 0
};

exports.help = {
  name: 'Espri',
  description: 'Espri Yapar',
  usage: 'Espri'
};