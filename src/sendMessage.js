import * as dotenv from 'dotenv';
dotenv.config();
import { Client, GatewayIntentBits } from "discord.js";
import { sendMessage } from "./utils/baseMethod.js";

const env = process.env;

const {
    Guilds,
    GuildMessages,
    MessageContent
} = GatewayIntentBits;
const client = new Client({
    intents: [
        Guilds, GuildMessages, MessageContent
    ]
});

client.on("ready", () => {
    // メッセージ送信を行うチャンネル取得
    const textRoom = client.channels.cache.get(env.MESSAGE_CHANNEL_ID);
    sendMessage(textRoom, process.argv[3] ?? env.SEND_MESSAGE);
    return;
});

let bot_token = env.TOKEN;
// コマンドライン引数が指定されていれば、引数をトークンとして使用
if (process.argv[2]) {
    bot_token = process.argv[2];
}

client.login(bot_token);