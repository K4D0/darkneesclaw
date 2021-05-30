const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./ekonomi.json"); 
const slots = ['1','10','5','100','5000','3000','2000','1000','360','2670','5100','1670','1690']
exports.run = function(client, message) {

    var slot1 = slots[Math.floor(Math.random() * slots.length)];


    if (slot1) {
        message.channel.send(`

        ${slot1} Kazandın
        `);
        db.ekle(`para_${message.author.id}`, slot1)
    } else {
        message.channel.send(`
        ${slots}

        Kaybettin
        `);
        db.cikar(`para_${message.author.id}`, slots)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['slots'],
  permLevel: 0
};

exports.help = {
  name: 'slots',
  description: 'Slots oyunu oynatır',
  usage: 'slots'
}; 