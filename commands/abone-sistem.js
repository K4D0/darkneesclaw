const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('ENGİNAR BOT HATA')
    .setDescription('Lütfen bir değer belirtiniz \n Abone sistemi hakkında bilgi edinmek istiyorsanız !abone-sistem yardım yazınız')
if(!args[0]) return message.channel.send(embed)
if(args[0] == "rol") {
let enginar = message.mentions.roles.first()
const embedd = new discord.MessageEmbed()
.setTitle('ENGİNAR BOT HATA')
.setDescription('Lütfen abone rolünü belirtiniz!')
if(!enginar) return message.channel.send(embedd)
db.set(`abonerol_${message.guild.id}`, enginar.id)
const embeddd = new discord.MessageEmbed()
.setTitle('BAŞARI İLE AYARLANDI')
.setDescription(`Abone rolü başarı ile <@&${enginar.id}> olarak ayarlandı!`)
return message.channel.send(embeddd)
}
if(args[0]== "yetkili") {
let enginar = message.mentions.roles.first()
const embedd = new discord.MessageEmbed()
.setTitle('ENGİNAR BOT HATA')
.setDescription(`Lütfen abone yetkili rolüü belirtiniz!`)
if(!enginar) return message.channel.send(embedd)
db.set(`aboneyetkili_${message.guild.id}`, enginar.id)
const tamamdır = new discord.MessageEmbed()
.setTitle('BAŞARI İLE AYARLANDI')
.setDescription(`Abone yetkili rolü başarı ile <@&${enginar.id}> olarak ayarlandı!`)
return message.channel.send(tamamdır)
}
if(args[0] == "log") {
let enginar = message.mentions.channels.first()
const embedd = new discord.MessageEmbed()
.setTitle('ENGİNAR BOT HATA')
.setDescription(`Lütfen abone log kanalını belirtiniz!`)
if(!enginar) return message.channel.send(embedd)
db.set(`abonelog_${message.guild.id}`, enginar.id)
const tamammı = new discord.MessageEmbed()
.setTitle('BAŞARI İLE AYARLANDI')
.setDescription(`Abone log kanalı <#${enginar.id}> olarak ayarlandı!`)
return message.channel.send(tamammı)
}
if(args[0] == "yardım") {
const embedd = new discord.MessageEmbed()
.setTitle(':pushpin:  ABONE KOMUTLARI  :pushpin: ')
.setDescription(`:wrench:  +abone-sistem rol = Abone rol ayarlarsınız. \n \n :wrench:  +abone-sistem yetkili = Abone yetkili ayarlarsınız. \n \n :wrench:  +abone-sistem log = Abone log ayarlarsınız. \n \n :wrench:  +abone-sistem yardım = Abone sisteminin yardım menüsüne erişirisiniz. \n \n :wrench:  +abone = Abone verirsiniz. \n \n :wrench:  +abone-sistem ayarlar = Abone sistemi ayarlarınızı gösterir.`)
return message.channel.send(embedd)
}
if(args[0] == "ayarlar") {
    let logvar = db.fetch(`abonelog_${message.guild.id}`)
    if(logvar == logvar) {var log = `<#` + logvar + `>`}
    if(logvar == undefined) {var log = "ayarlanmamış"}
    let rolvar = db.fetch(`abonerol_${message.guild.id}`)
    if(rolvar == rolvar) {var rol = `<@&` + rolvar + `>`}
    if(rolvar == undefined) {var rol = "ayarlanmamış"}
    let yetkilivar = db.fetch(`aboneyetkili_${message.guild.id}`)
    if(yetkilivar == yetkilivar) {var yetkili = `<@&` + yetkilivar + `>`}
    if(yetkilivar == undefined) {var yetkili = "ayarlanmamış"}
    const embeddd = new discord.MessageEmbed()
    .setTitle(':gear:  Abone Sistemi ayarları  :gear:')
    .setDescription(`:tools:  Abone rolü: ${rol} \n \n :tools:  Abone log kanalı: ${log} \n \n :tools:  Abone yetkili rolü: ${yetkili}`)
    return message.channel.send(embeddd)
}
if(args[0] == "sıfırla") {
db.remove(`abonerol_${message.guild.id}`)
db.remove(`aboneyetkili_${message.guild.id}`)
db.remove(`abonelog_${message.guild.id}`)
return message.channel.send('Sistem sıfırlandı!')
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'abone-sistem'
  };