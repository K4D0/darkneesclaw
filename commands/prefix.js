const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, message, args) => {
if(args[0] === "sıfırla"){
  if(db.has(`prefix_${message.guild.id}`)){
  db.delete(`prefix_${message.guild.id}`)
  return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription("Prefix sıfırlandı! Yeni Prefix: `?`"))
}};
if(args[0] !== "sıfırla"){
  var b = db.fetch(`prefix_${message.guild.id}`)
  if(b){
    var c = b
  }
  if(!b){
    var c = "?"
  }
  var a = args.slice(0).join(' ')
  if(!a) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Ayarlamam için bir prefix belirtin! Eğer prefix'i sıfırlamak istiyorsanız \`${c}prefix sıfırla\``))
  db.set(`prefix_${message.guild.id}`, a)//sunucu!
  return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`\`${c}\` olan prefix \`${a}\` olarak değiştirildi !`))
};
};
exports.conf = {
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: "prefix"
};