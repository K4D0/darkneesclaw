exports.run = async (client, message, args) => {
        if (!message.member.hasPermission(['MANAGE_ROLES', 'ADMINISTRATOR']) && !message.member.roles.cache.find(r => r.id === "821780790156328990")) return message.channel.send("Bu komutu kullanabilecek yetkiye sahip değilsin!");

        let kullanıcı = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!kullanıcı) return message.channel.send("**Abone** rolü vermemi istediğin kişiyi etiketlemen ya da ID'sini girmen gerek!");

        kullanıcı.roles.add("805488007851016212")
        message.channel.send(`**${kullanıcı.displayName}** adlı kullanıcıya **Abone** rolünü verdim.`)
}

exports.conf = {aliases: ['a']}

exports.help = {name: 'abone', description: 'Kullanıcıya abone rolü verir.', usage: 'abone <@kullanıcı | kullanıcı ID>'}