const Discord = require("discord.js"),
  db = require("quick.db");

///bu kod edebiyasız tarafindan linner botuna yaplmistir
module.exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    let dil = args[0];
    if (!dil) {
      message.channel.send(
        "__Lütfen bir dil belirtiniz! Diller: `TR_tr`, `EN_us`__"
      );
      return;
    }
    if (dil === "EN_us") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__New language set to \`${dil}\`!__`);
    } else if (dil === "TR_tr") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__Yeni dil \`${dil}\` olarak ayarlandı!__`);
    } else {
      message.channel.send("__Hatalı dil! Diller: `TR_tr`, `EN_us`__");
      return;
    }
  } else {
    let dil = args[0];
    if (!dil) {
      message.channel.send(
        "__Please specify a language! Languages: `TR_tr`, `EN_us`__"
      );
      return;
    }
    if (dil === "EN_us") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__New language set to \`${dil}\`!__`);
    } else if (dil === "TR_tr") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__Yeni dil \`${dil}\` olarak ayarlandı!__`);
    } else {
      message.channel.send(
        "__Incorrect language! Languages: `TR_tr`, `EN_us`__"
      );
      return;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["language", "lang"],
  permLevel: 3
};

exports.help = {
  name: "dil",
  description: "dil",
  usage: "dil"
};