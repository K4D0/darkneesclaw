const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./ekonomi.json"); 
exports.run = async(client, message, args) => {
let enginar = db.al(`para_${message.author.id}`) 
message.reply(`Toplam paran ${enginar}`); 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
 
exports.help = {
  name: 'param'
};