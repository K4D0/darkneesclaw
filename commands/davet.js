const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setDescription(`**🌐  Darkness Claw Davet Bağlantıları!**

🔰[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=810175682855698434&scope=bot&permissions=805314622)
🔰[Rolsüz Davet Et](https://discord.com/oauth2/authorize?client_id=810175682855698434&scope=bot&permissions=0)
🔰[Destek Sunucusu](https://discord.gg/8Z8mGynxgX)`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'davet'
};