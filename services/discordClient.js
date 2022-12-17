const { Client, GatewayIntentBits } = require('discord.js');
const token = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Discord bot online!');
});

// Login to Discord with your client's token
client.login(token);

module.exports = client;
