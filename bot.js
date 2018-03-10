const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'discod.gg/') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.includes("discordapp.com/invite/") || message.includes("discord.gg/")) {
        message.delete();
        message.channel.send("I didn't see that one :blush:");

    }
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
