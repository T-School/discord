import * as dotenv from 'dotenv';
dotenv.config();
import { Client, GatewayIntentBits } from "discord.js";

const env = process.env;
const {
    Guilds,
    GuildMembers,
    GuildMessages,
    MessageContent,
    GuildVoiceStates
} = GatewayIntentBits;
const client = new Client({
    intents: [
        Guilds, GuildMembers, GuildMessages, MessageContent, GuildVoiceStates
    ]
});

client.on("ready", () => {
    // 情報取得系のテストはここでログ出力して実施

    // タイムアウト時間が設定されていればセット
    const timeoutSeconds = env.TIMEOUT_SECONDS;
    if (timeoutSeconds && !isNaN(timeoutSeconds)) {
        setTimeout(() => {
            process.exit();
        }, timeoutSeconds * 1000);
    }
});

// ボイスチャンネルへのアクションを検知して発火
client.on("voiceStateUpdate", (oldState, newState) => {
    // メッセージ送信を行うチャンネル取得
    const textRoom = client.channels.cache.get(env.MESSAGE_CHANNEL_ID);

    // 対象のボイスチャンネル取得
    const voiceChannel = client.channels.cache.get(env.VOICE_CHANNEL_ID);

    if (newState && oldState) {
        if (oldState.channelId === null && newState.channelId != null) {
            // connectしたときに発火

            // チャンネルに参加中のメンバー取得
            let members = [];
            voiceChannel.members.forEach(m => {
                members.push(m.user.username);
            });

            // メッセージ生成/送信
            members.unshift(`ボイス参加メンバー: ${members.length}人\n`);
            const text = members.join("\n");
            textRoom.send(`\`\`\`${text}\`\`\``);
        }
        if (oldState.channelId != null && newState.channelId === null) {
            // disconnectしたときに発火
        }
        if (oldState.channelId === newState.channelId) {
            // ミュートなどの動作を行ったときに発火
        }
    }
    return;
});

let bot_token = env.TOKEN;
// コマンドライン引数が指定されていれば、引数をトークンとして使用
if (process.argv[2]) {
    bot_token = process.argv[2];
}

client.login(bot_token);