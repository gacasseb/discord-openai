require('dotenv').config();
const discordClient = require('./services/discordClient');
const openAi = require('./services/openAi');

discordClient.on('messageCreate', async message => {
    if (message.author.bot) return;
    
    let regex = /[cC]ompanheiro,? ?/;
    if (regex.test(message.content)) {
        console.log('Received message from ' + message.author.username);
        openAi(message.content.replace(regex, ''))
        .then(res => {
            return message.reply('Companheiro, ' + res.data.choices[0].text);
        })
        .catch(err => {
            return message.reply('Companheiro, essa eu vou ter que perguntar pra Dilma');
        })
    }
});
