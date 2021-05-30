const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, message, args) => {
if(!args[0]){
var uyarı = db.fetch(`uyarisicil_${message.author.id}`)
if(!uyarı){
    var uyarı = "0"
}
var ceza = db.fetch(`uyaricezapuani_${message.author.id}`)
if(!ceza){
    var ceza = "0"
}
let sebeps = db.fetch(`uyarisebep_${message.author.id}`)
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle(`${message.author.username}'nin sicili`)
.setDescription(`
**Uyarı Sayısı:** \`${uyarı}\`

**Ceza Puanı:** \`${ceza}\`

Uyarı sebeplerini özel mesaj olarak ilettim!
(Eğer uyarılmadıysa bu mesajı kâle almayınız.)
`)
.setFooter("Darkness Claw")
if(sebeps){const embed1 = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle(`${message.author.username} Uyarı Sebepleri`)
.setDescription(sebeps.join("\n\n"),{split:true})
.setFooter("Darkness Claw")
message.author.send(embed1)}
message.channel.send(embed)
if(!sebeps) return

};
var yetkilimq = db.fetch(`uyariyetkili_${message.guild.id}`)
if(!yetkilimq) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Uyarı Yetkilisi rol'ü ayarlanmamış. Başka kişilerin uyarılarını sadece yetkililer görebilir.")) 
var user = message.mentions.users.first()
if(!user) return;
if(!message.member.roles.cache.has(yetkilimq)) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`**Bu komutu kullanmak için <@&${yetkilimq}> rolüne sahip olmasın!** \n \n Başkalarının uyarılarını sadece yetkililer görebilir.`))
var uyarı = db.fetch(`uyarisicil_${user.id}`)
if(!uyarı){
    var uyarı = "0"
}
var ceza = db.fetch(`uyaricezapuani_${user.id}`)
if(!ceza){
    var ceza = "0"
}
let sebeps = db.fetch(`uyarisebep_${user.id}`)
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle(`${user.username}'nin Sicili`)
.setDescription(`
**Uyarı Sayısı:** \`${uyarı}\`

**Ceza Puanı:** \`${ceza}\`

Uyarı sebeplerini özel mesaj olarak ilettim!
(Eğer uyarılmadıysa bu mesajı kâle almayınız.)
`)
.setFooter("✮ Sâvagé & Âréz & Âlés")
message.channel.send(embed)
if(sebeps){
    const embed1 = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle(`${user.username} Uyarı Sebepleri`)
.setDescription(sebeps.join("\n\n"),{split:true})
.setFooter("✮ Sâvagé & Âréz & Âlés")
message.author.send(embed1)
}
else return;
};
exports.conf = {
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "sicil"
};