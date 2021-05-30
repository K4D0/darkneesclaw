const  Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('<a:dikkat:818893756903981056> Darkness Claw İstatistik <a:dikkat:818893756903981056>')
    .addField('🛠 Geliştirici & Yapımcı', `<@515589379704487936>`)
    .addField('🤖 Prefixim', `\`${client.ayarlar.prefix}\``,true)
    .addField('<a:loading2:818893757092724736> Gecikme: ', client.ws.ping + 'ms',true)
    .addField('⏱ Çalışma Süresi: ', `${duration}`,true)
    .addField('🌐 Sunucular:', client.guilds.cache.size,true)
    .addField(`<a:emoji_7:814955023711731792> Kullanıcılar`, `${client.users.cache.size}`, true)
    .addField('📚 Kütüphanesi:', `Discord.js`,true)
    .addField('<a:reminder_ribbon:742698007262396426> Kanallar:', client.channels.cache.size,true)
    .addField('<a:reminder_ribbon:742698007262396426> Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2),true)
    .addField(`<a:reminder_ribbon:742698007262396426> Discord.js sürümü:`, Discord.version,true)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi','i'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};