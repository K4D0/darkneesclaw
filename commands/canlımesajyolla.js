const discord = require('discord.js');
const db = require("quick.db");
const bt = require('best-tools');
exports.run = async(client, message, args) => {
let id = args[0]
if(!id) return message.channel.send('Lütfen bir canlı destek idi belirtiniz!')
let enginar = db.fetch(`canlıdestek_${id}`)
if(!enginar) return message.channel.send('Böyle bir canlı destek idi yok!')
let enginn = db.fetch(`onaylıcanlıdestek_${enginar}`)
if(!enginn) return message.channel.send('Bu canlı destek talebi onaylı değil!')
let mesaj = args.slice(1).join(' ')
if(!mesaj) return message.channel.send('Lütfen bir mesaj belirtin!')
client.users.cache.get(enginar).send(mesaj)
return message.channel.send('mesaj gönderildi!')
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 8 // sahip perime ayarlayın yoksa çalışmaz
  };
  
  exports.help = {
    name: 'canlı-mesaj-yolla' 
  };