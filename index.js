const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
]})

client.on('ready', () => {
console.log('[+] Discord Bot is Online! '+client.user.username)
client.user.setActivity('TEST', { type: 'PLAYING' });

})

const welcomeChannelId = 'Welcomechid';
const leaveChannelId = 'Leavechid';

client.on('guildMemberAdd', (member) => {
  const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);
  if (welcomeChannel) {
    welcomeChannel.send(`Welcome ${member}`);
  }
});

client.on('guildMemberRemove', (member) => {
  const leaveChannel = member.guild.channels.cache.get(leaveChannelId);
  if (leaveChannel) {
    leaveChannel.send(`Goodbye ${member.user.tag}`);
  }
});




client.login("your-token")
