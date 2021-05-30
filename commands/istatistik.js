const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
const istatistikler = new Discord.MessageEmbed().setTitle('<a:emoji_5:814954933027733514> Darkness Claw İstatistik <a:emoji_5:814954933027733514>')
  .addField(`**__Sahip Geliştirici__**`, `<a:gelistirici:825353734045433897> Bot Sahibi : <@515589379704487936>`, )
  .addField(`<a:loading2:818893757092724736> |  Pingim` ,`${client.ws.ping}ms`,true)
 .addField(`<a:emoji_7:814955023711731792> | Toplam Sunucu`, `${client.guilds.cache.size}`, true)
 .addField(`<a:emoji_7:814955023711731792> | Toplam Kullanıcı`, `${client.users.cache.size}`, true)
  message.channel.send(istatistikler)
}//lrows
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'botbilgi',
  description: 'İstatistik Komutu',
  usage: 'botbilgi'
}; 