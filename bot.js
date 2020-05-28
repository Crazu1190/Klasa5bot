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
        message.channel.send('Blokada nałożona przez Michał Gap');
        message.channel.send('Typ blokady: Wyciszenie na kanałach tekstowych ');
        message.channel.send('Powód blokady: Wyzywanie się');
        message.channel.send('BLOKADA WYGASŁA');
        }
     if (message.content === '!statusbota') {
    	message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send(' ');
        message.channel.send('Status bota znajdziesz w linku na dole');
        message.channel.send('https://sites.google.com/view/klasa5-bot58fuehsad23as/strona-g%C5%82%C3%B3wna');
        }
     if (message.content === '!restrick włącz') {
    	message.channel.send('Przyjęto twoje żądanie');
        }
     if (message.content === '!nieobecneosoby') {
    	message.channel.send('Komenda jest dostępna podczas lekcji');
        }
     if (message.content === '!pracadomowa') {
    	message.channel.send('Nie wprowadzono danych');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
