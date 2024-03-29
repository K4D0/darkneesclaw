const Discord = require('discord.js');
const data = require('quick.db');

module.exports = async message => {
  
  let client = message.client;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  let prefix = client.ayarlar.prefix;
  if (message.content.startsWith(prefix)) {
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

  if (cmd) {
        if (cmd.conf.karaliste === true) {
  const Database = require("plasma-db");
  const db = new Database("./anti-raid.json");
            let enginar = db.fetch(`karaliste_${message.guild.id}.${message.author.id}`)
            if (!message.guild.owner.id.includes(message.author.id) && message.author.id == enginar) {
              const embed = new Discord.MessageEmbed()
                          .setDescription(`:x: **${cmd.help.name}** isimli komutu kullanabilmek için sunucu sahibi olman ve ya kara listeden çıkartılman gerek!`)
                          .setColor("RED")
                      message.channel.send({embed})
                      return
            }
          }
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
  }

};
