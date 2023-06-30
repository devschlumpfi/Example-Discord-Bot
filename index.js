const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMembers
]})

client.on("ready" => {
console.log('[+] Discord Bot is Online! '+client.user.username)

})


client.login("your-token")
