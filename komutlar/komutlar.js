const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("**» Eğlence Komutları**", `**o!!atatürk** = Rastgele Atatürkün Fotoğraflarını Gösterir. \n**o!!starwars** = StarWars (Pixel Formatında) Filmini Gösterir. \n**o!!banned** = Dene ve Göro!! \n**o!!kahkaha** = Kahkaha Atarsınız \n**o!!herkesebendençay** = Herkese Çay Alırsınız. \n**o!!koş** = Koşarsınız.\n**o!!çayiç** = Çay İçersiniz. \n**o!!çekiç** = İstediğiniz Kişiye Çekiç Atarsınız. \n**o!!çayaşekerat** = Çaya Şeker Atarsınız. \n**o!!yumruk-at** = Yumruk Atarsınız. \n**o!!şanslısayım** = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("**» Kullanıcı Komutları**", `**o!!report** = İstediğiniz Kullanıcıyı Reportlarsınız. \n**o!!kısalt** = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \n**o!!yaz** = Bota İsediğinizi Yazdırırsınız. \n**o!!sunucubilgi** = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \n**o!!sunucuresmi** = Bulunduğunuz Sunucunun Resmin Gösterir. \n**o!!kullanıcıbilgim** = Sizin Hakkınızda Bilgi Verir. \n**o!!avatarım** = Avatarınınızı Gösterir.`)
  .addField("**» Oyun Komutları**", `**o!!fortnite** = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız.`)
  .addField("**» Sunucu Yetkilisi Komutları**", `**o!!ban** = İstediğiniz Kişiyi Sunucudan Banlar. \n**o!!kick**  = İstediğiniz Kişiyi Sunucudan Atar. \n**o!!unban = İstediğiniz Kişinin Yasağını Açar. \n**o!!sustur** = İstediğiniz Kişiyi Susturur. \n**o!!sil** = Belirtilen Miktarda Mesajı Silir. (MAX 100) \n**o!!oylama** = Oylama Açar. \n**o!!duyuru** = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**» Botun Ana Komutları**", "\n**o!!bilgi** = BOT Kendisi Hakkında Bilgi Verir. \n**o!!ping** = BOT Gecikme Süresini Söyler. \n**o!!davet** = BOT Davet Linkini Atar. \n**o!!istatistik** = BOT İstatistiklerini Gösterir.")
  .setFooter('OPERA Güncel Sürüm')
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: '',
  usage: 'komutlar'
};
