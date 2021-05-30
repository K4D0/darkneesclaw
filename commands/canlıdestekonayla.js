const discord = require('discord.js');
const db = require('quick.db');
const bt = require('best-tools');
exports.run = async(client, message, args) => {
let id = args[0]
if(!id) return message.channel.send('Lütfen bir canlı destek idi belirtiniz!')
let enginar = db.fetch(`canlıdestek_${id}`)
if(!enginar) return message.channel.send('Böyle bir canlı destek idi yok!')
const embed = new discord.MessageEmbed()
.setTitle(`Canlı destek onaylandı!`)
.setDescription(`${id} idli canlı destek <@${message.author.id}> tarafından onaylandı! \n\n Sohbet başarı ile başlatıldı! \n <@${enginar}> dm bekleniyosunuz :D`)
client.channels.cache.get("820738606603173898").send(embed)
db.set(`onaylıcanlıdestek_${enginar}`, enginar)
db.set(`canlıdestekkanal_${enginar}`, message.channel.id)
client.users.cache.get(enginar).send(`${id} idli canlı desteğiniz <@${message.author.id}> tarafından başlatıldı! \n Lütfen sorunuzunu buraya yazınız :D \n Bitirmek için: +canlı-destek-bitir id`)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 5 // sahip perime ayarlayın yoksa çalışmaz
  };
  
  exports.help = {
    name: 'canlı-destek-onayla' 
  }