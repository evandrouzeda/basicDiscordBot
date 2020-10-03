const Discord = require('discord.js')
const bot = new Discord.Client();

const token = 'SEU TOKEN AQUI';

const prefix = '!'

bot.on('ready', () => {
    console.log('estamos online');
})

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const comando = args.shift().toLowerCase();

    if (comando === 'ping') {
        message.channel.send('pong')
    }
})
bot.login(token);