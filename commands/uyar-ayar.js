const Discord = require('discord.js');
const db = require('quick.db');
const p = "."
exports.run = async(client, message, args) => {
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir komut belirtmelisiniz. Darkness Claw Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyar-a yardım\``))
if(args[0] === "log"){
var kanal = message.mentions.channels.first();
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir kanal belirtmelisiniz. Darkness Claw Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyar-a yardım\``))
db.set(`uyarilog_${message.guild.id}`, kanal.id)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Uyarı Log kanalı ayarlandı."))
};
if(args[0] === "yetkili" || args[0] === "görevli"){
var rol = message.mentions.roles.first();
if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir rol belirtmelisiniz. Darkness Claw Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyar-a yardım\``))
db.set(`uyariyetkili_${message.guild.id}`, rol.id)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`\`Uyarı Yetkilisi\` rol'ü <@&${rol.id}> olarak ayarlandı!`))
};
if(args[0] === "sınır"){
var sınır = args.slice(1).join('')
if(!sınır) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir sayı belirtmelisiniz. Darkness Claw Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyar-a yardım\``))
if(isNaN(sınır)) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir sayı belirtmelisiniz. Darkness Claw Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyar-a yardım\``))
if(sınır > 2000) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Girdiğiniz sayı 2000'den küçük olmalıdır.`))
db.set(`uyarisinir_${message.guild.id}`, sınır)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Uyarı sınırı ayarlandı!"))
};
if(args[0] === "cezalı"){
var rol = message.mentions.roles.first()
if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir rol berlirtin!"))
db.set(`uyaricezarol_${message.guild.id}`, rol.id)
return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setDescription("Uyarı ceza rolü ayarlandı!"))
};
if(args[0] === "yardım"){
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle("Darkness Claw | Yardım Paneli")
.setDescription(`
**uyarı-a log** : Log kanalını ayarlar.
**uyarı-a yetkili** : Uyarı yetkilisini ayarlar.
**uyarı-a sınır** : Ceza Puanı sınırını ayarlar.
**uyarı-a cezalı** : Ceza rolünü ayarlar
**sicil @kisi** : Kişinin uyarı geçmişini gösterir.
(Eğer kişi etiketlenmezse kendisinin uyarı geçmişini gösterir)
**uyarı-sil @kisi** : Kişinin tüm uyarı geçmişini siler.
**uyar @kisi <sebep>** : Kişiyi uyarır.
`)
return message.channel.send(embed)
};
};
exports.conf = {
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "uyarı-a"
};