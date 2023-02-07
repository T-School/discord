// const { Client, Intents } = require('discord.js');
// const { token, channelId } = require('./config.json');

// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

// client.on('voiceStateUpdate', (oldState, newState) => {
// 	const channel = oldState.member.guild.channels.cache.get(channelId);

// 	if (oldState.channelId === null && newState.channelId !== null) {
// 		return channel.send(`**参加** ${oldState.member.user.tag}さんが入室しました。`);
// 	}
// 	else if (oldState.channelId !== null && newState.channelId === null) {
// 		return channel.send(`**退出** ${newState.member.user.tag}さんが退出しました。`);
// 	}
// });

// client.login(token);

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.once('ready', () => {
	console.log('Ready!'); // 起動した時に"Ready!"とコンソールに出力する
	console.log(client);
});

client.on("guildMemberAdd", member => {
	if (member.guild.id !== "1072472990098395136") return; // 指定のサーバー以外では動作しないようにする
	member.guild.channels.cache.get("1072515494441140275").send(`${member.user}が参加しました！`);
});

client.login("****");