const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
 
    var ökanal = await db.fetch(`önerikanal_${message.guild.id}`)
    var önerikanalı = message.guild.channels.cache.find(channel => channel.id === ökanal)
    if (!ökanal) return message.channel.send("😔 **Maalesef Bir Öneri Kanalı Ayarlanmamış.** <a:emoji_3:814954858117333002> `Ayarlamak İçin +öneri-kanal #kanal` ")

var oneri = args.join(" ").slice(0)
if (!oneri) {
    message.channel.send("**😔 Hey Dostum Yanlış Kullanıyorsun. Merak Etme Ben Burdayım :kopke:** \n <a:emoji_3:814954858117333002> `Örnek: +öneri Darkness Claw'a Oy Vermeyen Banlansın`")
  
  return
} else {
    const embed = new Discord.MessageEmbed()
    .setTitle("Yeni Bir Öneri Var!")
    .addField("<a:emoji_7:814955023711731792> Öneren Kullanıcı:", `${message.author.tag}`)
    .addField(`<a:emoji_8:818893328673538079> Öneri`, oneri)
  .setColor("RED")
     .setTimestamp()
.setThumbnail(client.user.displayAvatarURL())
.setFooter(`Darkness Claw`)
    
önerikanalı.send(embed).then(m => {
    m.react("✅")
    m.react("❌")})
}

  message.channel.send(`<a:emoji_6:814954985481175120> **Öneriniz başarıyla alındı!** \n <a:emoji_5:814954933027733514> _Önerin ${önerikanalı} kanalına düştü_`)

 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["istek"],
 permLevel: 0
}
exports.help = {
 name: 'öneri',
 description: 'ö',
 usage: 'ö'
};