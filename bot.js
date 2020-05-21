const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

});

client.on('message', message => {
    if (message.content === '!blokady karixq2') {
    	message.channel.send('Wyszukiwanie informacji...');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send('Wczytywanie...');
        message.channel.send(' ');
        message.delete('Wczytywanie...');
        message.reply('wszystko zostało wczytane!');
        message.channel.send('■■■■■■■■■■■■');
        message.channel.send('Blokady użytkownika @karixq2 :');
        message.channel.send('Znaleziono 1 blokadę :');
        message.channel.send('Blokada nałożona przez @Crazy1190');
        message.channel.send('Typ blokady: Wyciszenie na kanałach tekstowych ');
        message.channel.send('Powód blokady: Wyzywanie się');
        message.channel.send('BLOKADA WYGASŁA');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
