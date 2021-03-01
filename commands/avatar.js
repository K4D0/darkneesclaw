const Discord = require('discord.js');

exports.run = async (client, message, args) => {
let user = message.mentions.users.first() || message.author;
message.channel.send(new Discord.MessageAttachment(user.avatarURL({dynamic: true})));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pp'],
  permLevel: 0
}

exports.help = {
  name: 'avatar'
};