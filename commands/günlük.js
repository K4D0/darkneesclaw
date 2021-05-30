const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./ekonomi.json"); 
const talkedRecently = new Set();

exports.run = async(client, message, args) => {
if (talkedRecently.has(message.author.id)) {
    return message.reply("``Bu komutu kullanabilmek için 1 gün beklemelisin!``");
} else {
 talkedRecently.add(message.author.id);
 setTimeout(() => {
 message.delete();
   talkedRecently.delete(message.author.id);
 }, 86400);
}
    message.reply('Başarı ile günlük ödülünü aldın!'); 
db.ekle(`para_${message.author.id}`, 3000) 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
 
exports.help = {
  name: 'günlük'
};