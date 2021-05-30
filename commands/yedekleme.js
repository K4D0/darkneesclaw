const Discord = require("discord.js"),
backup = require("discord-backup"),

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send(":x: | Yedekleme komutunu kullanabilmek için ADMINISTRATOR iznine sahip olman gerekiyor!");
        }
        
        if (args[0] === "oluştur") => {
             message.channel.send('Yedekleme oluşturuluyor. Lütfen birkaç dakika bekleyiniz!').then(msg => msg.delete({ timeout: 5000 }))
        backup.create(message.guild, {
            jsonBeautify: true
        }).then((backupData) => {
            // And send informations to the backup owner
            message.author.send("Yedekeleme oluşturuldu! Yüklemek için komutu şöyle çalıştırın: `"+settings.prefix+"yedekleme yükle "+backupData.id+"`!");
            message.channel.send(":white_check_mark: Yedekleme başarıyla oluşturuldu. DM kutunuzu kontrol ediniz!");
        });
        } else if (args[0] === "yükle") => {
            let backupID = args[1];
        if(!backupID){
            return message.channel.send(":x: | Bir yedekleme ID'si girmen gerek!");
        }
        backup.fetch(backupID).then(async () => {
            message.channel.send(":warning: | Yedekleme yüklendiğinde, tüm kanallar, roller vb. Değiştirilecektir.! `-onayla` yazarak lütfen komutu onaylayın!");
                await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "-onayla"), {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch((err) => {
                    return message.channel.send(":x: | Zaman doldu, yanıt verilmediği için işlem iptal edildi.");
                });
                message.author.send(":white_check_mark: | Yedekleme yüklenmeye başladı.!");
                backup.load(backupID, message.guild).then(() => {
                    backup.remove(backupID);
                }).catch((err) => {
                    return message.author.send(":x: | Bir hata oluştu... Bota tam yetki verdiğinizden emin olun + Botun rolünün tüm rollerin üzerinde olduğundan da emin olun!");
                });
        }).catch((err) => {
            console.log(err);
            return message.channel.send(":x: | Şu ID'ye sahip bir yedekleme bulamadım: `"+backupID+"`!");
        });
        } else if (args[0] === "bilgi") => {
            let backupID = args[1];
        if(!backupID){
            return message.channel.send(":x: | Bilgisi verilmesi gereken bir yedekleme ID'si girmen gerek!");
        }
        backup.fetch(backupID).then((backupInfos) => {
            const date = new Date(backupInfos.data.createdTimestamp);
            const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
            const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
            let embed = new Discord.MessageEmbed()
                .setAuthor("Yedekleme Bilgisi")
                .addField("Yedekleme ID'si", backupInfos.id, false)
                .addField("Sunucu ID", backupInfos.data.guildID, false)
                .addField("Boyut", `${backupInfos.size} kb`, false)
                .addField("Oluşturulma tarihi", formatedDate, false)
                .setColor("#FF0000");
            message.channel.send(embed);
        }).catch((err) => {
            return message.channel.send(":x: | Şu ID için yedekleme bulunamadı: `"+backupID+"`!");
        });
        }
}

exports.conf = {
    aliases: ["backup"]
}

exports.help = {
    name: 'yedekleme',
    description: 'Sunucunuzu yedekler.',
    usage: 'yedekleme oluştur/yükle/bilgi'
}