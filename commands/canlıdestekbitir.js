const discord = require('discord.js');
const db = require("quick.db");
exports.run = async(client, message, args) => {
let engin = args[0]
if(!engin) return message.channel.send('Lütfen id belirtin!')
let enginar = db.fetch(`canlıdestek_${engin}`)
db.delete(`onaylıcanlıdestek_${enginar}`)
db.delete(`canlıdestekkanal_${enginar}`)
db.delete(`canlıdestek_${engin}`)
return message.channel.send('Canlı destek bitirildi!')
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'canlı-destek-bitir' 
  };