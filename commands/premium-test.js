const Discord = require('discord.js');
const data = require('quick.db')

  exports.run = async (client, message, args) => {
  if (message.author.id !== "515589379704487936") // sahip id
    return message.channel.send("**Hey Dostum! Bu Komut Sahibime Özel**");
  
  let açıkmı = await data.fetch(`premium.${message.guild.id}`)
  if(açıkmı) {

// buranın altına komutları yazın    
const virus = new Discord.MessageEmbed()
.setColor("YELLOW")
.setDescription("**Evet dostum bu bir premium test komutu**")
.setFooter(``)
.setTimestamp()
.setTitle(`🔔 Bilgilendirme !`)
message.channel.send(virus)   
// buranın üstüne komutu yazın
} else { return message.channel.send(new Discord.MessageEmbed()
 .setDescription(`${message.author}, bu komut premium bir komuttur. Bu sunucu da premium bulunmamakta.`)
.setFooter(``)
.setTimestamp()
.setTitle(`🔔 Bilgilendirme !`)
.setColor(`YELLOW`)
)
} 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["test"],
  permLevel: 0
}

exports.help = {
  name: 'premiumtest'
};