# discord

Discord関連のソース
<!--  -->
## voice_notification

ボイスチャンネルへの入退室をトリガーとしてテキストチャンネルへ通知するBOT

## [Botアカウントの設定手順](https://discordpy.readthedocs.io/ja/latest/discord.html)

### 作成

Discordの[Applications](https://discord.com/developers/applications)ページを開き、画面右上`New Application`を開く。
任意の`NAME`と`APP ICON`を設定する。(後からいつでも変更可能)

画面左側`BOT`タブへ移り、`Build-A-Bot` > `Add Bot`をクリック > `Yes, do it!`をクリックしてBotを作成する。
遷移先の画面`USERNAME`の下の`TOKEN`を`Copy`して控えておく。
![TOKEN](/img/create01.png)

### Botの設定

#### Privileged Gateway Intents

以下をONにする。

- [x] PRESENCE INTENT
- [x] SERVER MEMBERS INTENT
- [x] MESSAGE CONTENT INTENT

#### Bot Permissions

- [x] Send Messages

### OAuth2タブ

#### URL Generator

`scopes`で以下をチェック。

- [x] bot

GENERATED URLをブラウザで開き、開いた画面でBotを追加したいDiscordサーバを選択する。
「認証しました」と表示されたらBotの追加は完了。
![certificated](/img/create02.png)

#### 他ユーザーをTesterとして招待

画面左側 [**🙋 App Testers**]タブより、開発に関わる別のユーザーを`INVITE`する。

## ローカル環境で稼働させるには

`.env`に、稼働させるBotトークン・通知させるチャンネルID・監視するボイスチャンネルIDをそれぞれ記載する。

## デプロイ

[【GitHub Actions】.envファイルを使用する](https://zenn.dev/big_tanukiudon/articles/fc1a2ff562ce3d)

### 設定値の更新

[Settings](https://github.com/T-School/discord/settings) > [Actions secrets and variables](https://github.com/T-School/discord/settings/secrets/actions)にて、**Repository secrets** を新しい設定値で更新する。

#### 設定値の一覧

| key                | value                                 |
| ------------------ | ------------------------------------- |
| MESSAGE_CHANNEL_ID | Botがメッセージを通知するチャンネルID |
| TIMEOUT_SECOUNDS   | 監視を継続させる最大時間(秒)          |
| TOKEN              | 稼働させるBotのトークン               |
| VOICE_CHANNEL_ID   | 監視対象のボイスチャンネルID          |

チャンネルIDの調べ方は「[ユーザー/サーバー/メッセージIDはどこで見つけられる？](https://support.discord.com/hc/ja/articles/206346498)」