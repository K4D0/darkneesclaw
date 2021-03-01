const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
const datas = await data.fetch(`${message.author.id}.zaman.youtube`);
if(Date.now() < datas) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`${message.author} **__6__ saat de bir kullanabilirsiniz!**`)).then(m => m.delete({timeout: 6000}));
data.set(`${message.author.id}.zaman.youtuber`, Date.now()+ms('6h'));
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} **Özelden __Youtuber Sunucusu__ temsı yolladım bakar mısın.**`));
message.author.send(`> **1 adet __Youtuber Sunucusu__ kurmak için tema geldi.**

> Güle güle kullan 😇

https://discord.new/TwDAYrr4nSvE`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı.")));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yt-tema', 'yt-t'],
  permLevel: 0
}

exports.help = {
  name: 'youtube-tema'
};