const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, message, args) => {
var yetkili = db.fetch(`uyariyetkili_${message.guild.id}`)
if(!yetkili) return message.channel.send(new Discord.MessageEmbed().setDescription("Uyarı yetkilisi rol'ü ayarlanmamış!"))
if(!message.member.roles.cache.has(yetkili)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanmak için <@&${yetkili}> rolüne sahip olmalısın!`))
var user = message.mentions.users.first();
if(!user) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir kişi etiketleyin.'))
var sebep = args.slice(1).join(' ')
if(!sebep) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir sebep belirtin!'))
db.add(`uyarisicil_${user.id}`, 1)
db.add(`uyaricezapuani_${user.id}`, 10)
db.push(`uyarisebep_${user.id}`, `**${message.author.username} => **` + sebep)
message.guild.member(user).send(new Discord.MessageEmbed().setDescription(`${message.guild.name} sunucusunda ${sebep} sebebiyle uyarıldınız! \n \n Yetkili: ${message.author}`))
message.channel.send(new Discord.MessageEmbed().setDescription(`${user.username}, ${message.author} tarafından ${sebep} sebebiyle uyarıldı!`))
};
exports.conf = {
    aliases: ['warn'],
    permLevel: 0
};
exports.help = {
    name: "uyar"
};