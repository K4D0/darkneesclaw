const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, Util } = require("discord.js");
const fs = require("fs");
require("./util/eventLoader")(client);

client.ayarlar = { 
"token": "ODEwMTc1NjgyODU1Njk4NDM0.YCf05w.prAwjMThULb4nupj3q4MJ7hPOeE",
"prefix": "+",
"sahip": "515589379704487936",
}

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  const data = require('quick.db');
  console.log('')
  console.log(`${files.length} kadar komut yüklenecek.`)
  files.forEach(async f => {
    let props = require(`./commands/${f}`);
    console.log(`Yüklendi: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
  console.log('')

});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.permissions.has("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 2;
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 2;
  if (message.author.id === message.guild.owner.id) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g

client.login(client.ayarlar.token);
const moment = require('moment');
moment.locale('tr');
const { S_IFREG } = require("constants");
const data = require('quick.db');
const logs = require('discord-logs');
logs(client);

client.on("ready",() => {
console.log("Bot Hazır");
var randomMesajlar = ["💠Hizmetinizdeyim",`🔥${client.guilds.cache.size} Sunucuya ve ${client.users.cache.size} kişiye hizmet veriyorum!`,`🔥${client.ayarlar.prefix}yardım ✨${client.ayarlar.prefix}yenilikler`,`💎Darkness Claw #Support`]
setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`);}, 1 * 10000);
client.user.setStatus("idle");
})

client.on('message', async message => {
if(message.channel.type !== 'text') return;
const datas = await data.fetch(`tag.${message.guild.id}`);
if(message.content.toLowerCase().toString().includes('tag')) {
if(datas) return message.channel.send('`'+datas+'`');
};
});

client.on('message', async message => {
if(message.channel.type !== 'text') return;
if(message.author.bot) return;
if(message.content.startsWith(client.ayarlar.prefix+'afk')) return;
if(message.mentions.members.first()) {
let mention = message.mentions.members.first();
const est = await data.fetch(`kullanıcı.${mention.id}.${message.guild.id}`);
if(est) {
message.channel.send(new Discord.MessageEmbed().setThumbnail(mention.user.avatarURL() ? mention.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setTitle('Tıkladığın Kullanıcı AFK').setDescription(` \n**• __Sebep;__ \`${est}\`**`));
}
}
const stat = await data.fetch(`name.${message.author.id}.${message.guild.id}`);
if(stat) {
message.member.setNickname(stat);
data.delete(`kullanıcı.${message.author.id}.${message.guild.id}`);
data.delete(`name.${message.author.id}.${message.guild.id}`);
message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} **Cihaz üzerine tekrardan hoş geldin!**`));
}
})

client.on('userUpdate', (oldUser, newUser) => {
client.guilds.cache.forEach(async guild => {
if(!guild.members.cache.get(newUser.id)) return;
const tagFetch = await data.fetch(`roltag.${guild.id}`);
const roleFetch = await data.fetch(`tag.role.${guild.id}`);
const logFetch = await data.fetch(`tag.log.${guild.id}`);
if(!tagFetch || !roleFetch || !logFetch) return;
let tag = tagFetch;
let role = guild.roles.cache.get(roleFetch);
let log = guild.channels.cach.eget(logFetch);
if(oldUser.username === newUser.username) return;
if(newUser.username.includes(tag) && !oldUser.username.includes(tag)) {
log.send(new Discord.MessageEmbed()
.setTitle('Darkness Claw - TAG Alındı.')
.setDescription(`${newUser} **Aramıza hoşgeldin. \`${tag}\` tagını aldığı için ${role} rolü verildi!**`));
guild.members.cache.get(newUser.id).roles.add(role.id);
}
if(oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
log.send(new Discord.MessageEmbed()
.setTitle('Darkness Claw - TAG Çıkarıldı.')
.setColor('#f1c335')
.setDescription(`${newUser} **Aramızdan ayrıldı. \`${tag}\` tagını çıkardığı için ${role} rolü alındı!**`));
guild.members.cache.get(newUser.id).roles.remove(role.id);
}
})
})


client.on('roleDelete', async role => {
  const sistem = await data.fetch(`korumalar.${role.guild.id}`);
  if(!sistem) return;
  
  let guild = role.guild;
  const entry = await guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('MANAGE_ROLES')) return member.roles.remove(s.id);
  })
  });
  
  client.on('roleUpdate', async (oldRole, newRole) => {
  const sistem = await data.fetch(`korumalar.${newRole.guild.id}`);
  if(!sistem) return;
  
  let guild = newRole.guild;
  const entry = await guild.fetchAuditLogs({ type: "ROLE_UPDATE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(oldRole.permissions.has('ADMINISTRATOR') && newRole.permissions.has('ADMINISTRATOR')) {
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('ADMINISTRATOR')) return member.roles.remove(s.id);
  })
  }
  });
  
  client.on('guildBanAdd', async member => {
  const sistem = await data.fetch(`korumalar.${member.guild.id}`);
  if(!sistem) return;
  
  let guild = member.guild;
  const entry = await guild.fetchAuditLogs({ type: "MEMBER_BAN_ADD" }).then(audit => audit.entries.first());
  let yetkili = entry.executor;
  
  if(yetkili.id == guild.owner.user.id) return;
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('BAN_MEMBERS')) return yetkili.roles.remove(s.id);
  })
  guild.members.unban(member.id);
  })
  
  client.on('channelDelete', async channel => {
  const sistem = await data.fetch(`korumalar.${channel.guild.id}`);
  if(!sistem) return;
  
  let guild = channel.guild;
  const entry = await guild.fetchAuditLogs({ type: "CHANNEL_DELETE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('MANAGE_CHANNELS')) return yetkili.roles.remove(s.id);
  })
  
  channel.clone({ name: channel.name });
  })
  
  client.on('emojiDelete', async emoji => {
  const sistem = await data.fetch(`korumalar.${emoji.guild.id}`);
  if(!sistem) return;
  
  let guild = emoji.guild;
  const entry = await guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('MANAGE_EMOJIS')) return yetkili.roles.remove(s.id);
  })
  
  guild.emojis.create(emoji.url, emoji.name);
  })

  client.on('guildMemberAdd', async member => {
  let user = member.user;
  let guild = member.guild;
  const sistemKanalID = await data.fetch(`sayaç.kanal.${guild.id}`);
  if(!sistemKanalID) return;
  let channel = guild.channels.cache.get(sistemKanalID);
  const sistemSayı = await data.fetch(`sayaç.sayı.${guild.id}`);
  if(!sistemSayı) return;
  let sayı = Number(sistemSayı);
  if(!sayı) return;
  let rol;
  const otoRole = await data.fetch(`oto.role.${guild.id}`);
  if(otoRole) {
  rol = `>>> **Sunucuya katılan kullanıcıya ${guild.roles.cache.get(otoRole)} rolü direk verildi!**`
  } else {
  rol = ''
  }
  if(guild.memberCount >= sayı) {
  data.delete(`sayaç.sayı.${guild.id}`);
  data.delete(`sayaç.kanal.${guild.id}`);
  channel.send(`> \`${user.tag}\` **az önce katıldı... yoksa katılmadı mı?**
  
  > **Toplam da** \`${guild.memberCount}\` **Kişi olduk! Sayaç tamamlandı! 🎉**
  
  ${rol}`)
  } else {
  channel.send(`> \`${user.tag}\` **az önce katıldı... yoksa katılmadı mı?**
  
  > **Toplam da** \`${guild.memberCount}\` **Kişi olduk!** \`${sayı}\` **Kullanıcı olmasına** \`${sayı-Number(guild.memberCount)}\` **Kullanıcı kaldı!**
  
  ${rol}`)
  }
  
})

client.on('guildMemberRemove', async member => {
  let user = member.user;
  let guild = member.guild;
  const sistemKanalID = await data.fetch(`sayaç.kanal.${guild.id}`);
  if(!sistemKanalID) return;
  let channel = guild.channels.cache.get(sistemKanalID);
  const sistemSayı = await data.fetch(`sayaç.sayı.${guild.id}`);
  if(!sistemSayı) return;
  let sayı = Number(sistemSayı);
  if(!sayı) return;
  const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/766636339361480727/766636500891729930/giphy.gif');
  channel.send(`> \`${user.tag}\` **Gittiğini fark ettim Aaaaaa!**
  
  > **Toplam da** \`${guild.memberCount}\` **Kişi olduk!** \`${sayı}\` **Kullanıcı olmasına** \`${sayı-Number(guild.memberCount)}\` **Kullanıcı kaldı!**`, attachment)
  
})


client.on('message', message => {
  if(message.channel.type !== 'text') return;
  let mesaj = message.content.toLocaleLowerCase();
if(mesaj.includes('cloudup')) message.react('🤫');
})

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
  const küfür = await data.fetch(`küfür.${message.guild.id}`);
  if(!küfür) return;
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];
  const uyarılar = [
  'İt is Haram bRo! 🤥',
  'Az düzgün konuş günaha girme! 🤧',
  'Aaaa ayıp dostum! 🥴',
  'Vayy ahlaksız çocuk! 🙀',
  'Tövbesteyşin! 🤫'];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  let content = message.content.split(' ');
  
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Küfür Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
  })
  
  });
  
  client.on('message', async message => {
    if(message.channel.type !== 'text') return;
  const reklam = await data.fetch(`reklam.${message.guild.id}`);
  if(!reklam) return;
  const blacklist = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg"];
  const uyarılar = [
  'Kesinlikle yapma bunu okey? ♿',
  'Seni gidi çakal seni hıı! 🍌',
  'Ooo sanırım kendisini uyanık sandı? 🐍',
  'Şşş reklam kötü bir şey dostum! 🎭',
  'Haddini bil ya da çık git sunucudan! ⚰️'
  ];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  if(blacklist.some(a => message.content.includes(a)))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Reklam Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
  
  });

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.length >= 5) {

const caps = await data.fetch(`caps.${message.guild.id}`);
if(!caps) return;

let kontrol = message.content.toUpperCase()
if(message.content === kontrol) {

if(message.member.permissions.has('BAN_MEMBERS')) return;
if(message.mentions.users.first()) return;

return message.delete();

}}});


client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'sa') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(`${message.author} **ve aleyküm selam, Hoş Geldin!**`);
}});

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'selam') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(`${message.author} **ve aleyküm selam, Hoş Geldin!**`);
}});

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'selamün aleyküm') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(`${message.author} **ve aleyküm selam, Hoş Geldin!**`);
}});

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'lan') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(`${message.author} **Lan mı? Darıldım gücendim 😭**`);
}});

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'melih') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(`${message.author} **<@747166911384649748> Amerikaya Gitti O Boşa Arama Buralarda ŞŞŞ Kime Sölüyom Ben Alooo!!**`);
}});

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'hazal') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(`${message.author} **<@765661962330963998> Kendisi Adnan'a Küsmüştür Bize Bile Cevap Vermiyo Şer... Öhm Buyrun 😭**`);
}});

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'emine') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(`${message.author} **<@780375120593027081> Kankaaa Sana Sesleniyolar Baksanaaa Aloo!**`);
}});

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'adnan') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(`${message.author} **Yapımcıyı etiketlediniz bir sorun mu var? <@515589379704487936>**`);
}});

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'prefix') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(`${message.author} \`${client.ayarlar.prefix}\` prefixim.`);
}});

client.on('guildMemberAdd', async member => {
let user = member.user;
let guild = member.guild;

const systemTagData = await data.fetch(`yasaklı.tag.${guild.id}`);
const systemRoleData = await data.fetch(`yasaklı.tag.role.${guild.id}`);
if(!systemRoleData || !systemTagData) return; 

const systemTag = String(systemTagData);
const systemRole = guild.roles.cache.get(systemRoleData);

let userUsername = user.username;
if(!userUsername.includes(systemTag)) return;
member.roles.cache.forEach(role => member.roles.remove(role.id));
await member.roles.add(systemRole.id);
member.send(new Discord.MessageEmbed()
.setTitle('Yasaklı TAG Kullanıyorsun!')
.setColor('#9c5cb2')
.setDescription(`> \`${guild.name}\` *Sunucusu için yasaklı tagdasınız.*`)
.addField('• Bilgilendirme', '**Sunucu içerisinde ki yetkililere ulaşarak yasaklı tag dan cıkmanızı sağlayabilirsiniz!'));
});

client.on('guildMemberAdd', async member => {
let user = member.user;
let guild = member.guild;

const systemTagData = await data.fetch(`ototag.${guild.id}`);
const systemChannelData = await data.fetch(`ototag.log.${guild.id}`);
const systemNameData = await data.fetch(`otoisim.${guild.id}`);
if(!systemNameData) return;

let systemChannel;
if(systemChannelData) systemChannel = guild.channels.cache.get(systemChannelData);

let systemTag;
if(systemTagData) systemTag = String(systemTagData);

let replacedName;
if(systemTag) {
replacedName = systemNameData.replace('.kullanıcı', user.ussername).replace('.tag', systemTag);
} else {
replacedName = systemNameData.replace('.kullanıcı', user.username);
};

member.setNickname(replacedName);
if(systemChannel) systemChannel.send(`${member} giriş yaptı. Değişiklik: ${user.username} -> ${replacedName}`);
});

//---Buda main yanı botjs,serverjs,indexjs atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###MareFi

client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 600000
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`gold_${msg.author.id}`)
          if (i == 'gold') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
   msg.channel.send('**Bir Gold Üye Belirdi!!**')
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
})

client.on('guildMemberAdd', async member => {
let user = member.user;
let guild = member.guild;

const systemRoleData = await data.fetch(`fake.role.${guild.id}`);
if(!systemRoleData) return;

if(user.createdAt.getTime() <= 432000000) {
member.roles.set([]);
member.roles.set([systemRoleData]);
member.user.send(new Discord.MessageEmbed()
.setTitle('Yeni Hesap Kullanıyorsun!')
.setDescription(`>>> \`${guild.name}\` __Sunucusu için, Yeni hesap olduğunuzu tespit ettim. **5 Gün** içerisinde olan hesapları cezalıya atıyorum!__`)
.addField('• Bilgilendirme', '**Sunucu içerisinde ki yetkililere bildirmelisiniz.**')
.setColor('#351742'));
};
});

client.on("message", msg => {
const db = require("quick.db");
  let enginar= db.fetch(`onaylıcanlıdestek_${msg.author.id}`)
  if(!enginar) return;
  let engin = db.fetch(`canlıdestekkanal_${msg.author.id}`)
  var dm = client.channels.cache.get(engin)
  if(msg.channel.type === "dm") {
  if(msg.author.id === client.user.id) return;
  const botdm = new Discord.MessageEmbed()
  .setTitle(`CANLI DESTEK MESAJI`)
  .setTimestamp()
  .setColor("RED")
  .setThumbnail(`${msg.author.avatarURL()}`)
  .setDescription(`<@${msg.author.id}> adlı kişi ile başlattığınız destek talebinden yeni mesaj! \n \n  Mesaj: **${msg.content}** \n \n Sizde mejaj göndermek istiyorsanız !canlı-mesaj-yolla id mesaj \n\n Bitirmek için: !canlı-destek-bitir id`)
.setFooter('Plasmic code - Enginar')
  
  dm.send(botdm)
  
  }
  if(msg.channel.bot) return;
  });

client.on("message", async msg => {
  const Database = require("plasma-db");
  const db = new Database("./database.json"); 
    const gereksiz = await db.fetch(`komutsistem_${msg.guild.id}`);
    let engin = db.fetch(`komut_${msg.guild.id}`)
    let enginar = db.fetch(`komutrol_${msg.guild.id}`)
    if (gereksiz === "aktif") {
      if (
        msg.content.toLowerCase() == `!${engin}`
      )
      {
  msg.channel.send('Rolü verdim!')
  msg.member.roles.add(enginar)
      }
      } else if (gereksiz === "deaktif") {
    }
    if (!gereksiz) return;
  });

client.on("guildMemberAdd", member => {
    var rol = qdb.fetch(`otorol_${member.guild.id}`) 
    var rolcük = member.guild.roles.cache.get(rol)
    var kanal = qdb.fetch(`otorolkanali_${member.guild.id}`)
    var kanalcık = member.guild.channels.cache.get(kanal)
    var yazı = qdb.fetch(`otorolyazi_${member.guild.id}`)
    if(!yazı){
      var yazı = "" 
    }
    const embedversion1mq = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${client.user.username} Otorol Sistemi`)
    .setDescription(`
    **${yazı}**
    
    **${member} kişisi ${member.guild} sunucusuna katıldı!**
    
    **Verilen rol: ${rolcük}**
    
    **Hoşgeldin ${member}! Seninle Birlikte ${member.guild.memberCount} kişi olduk!**
    `)
    kanalcık.send(embedversion1mq)
    member.roles.add(rolcük.id)
})

client.on("guildMemberAdd", member => {
  const Database = require("plasma-db");
  const db = new Database("./anti-raid.json");
  if (member.user.bot !== true) {

  } else {

    let engin = db.fetch(`botkorumalog_${member.guild.id}`)
    if(!engin) return;
    let izinli = db.fetch(`girişizni_${member.guild.id}.${member.id}`)
  if (izinli === `${member.id}`) {
    const embed = new Discord.MessageEmbed()
    .setTitle('Bir bot sunucuya girdi!')
    .setDescription(`<@${member.id}> adlı bot sunucuya girdi ve giriş izni olduğu için girmesine izin verdim!`)
    .setColor('RANDOM')
    client.channels.cache.get(engin).send(embed)
    return;
  }
  member.ban(member);
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucuya bir bot girmeye çalıştı!')
  .setDescription(`<@${member.id}> Adlı bot sunucuya girmeye çalıştı ama ben anti raid sistemi açık olduğundan engelledim! \n \n Bota giriş izni vermek için: !botkoruma izin-ver ${member.id}`)
.setColor('RANDOM')
  client.channels.cache.get(engin).send(embed)
};

});