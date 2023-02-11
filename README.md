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

### Bot Permissions

- [x] Send Messages

### 他ユーザーをTesterとして招待

画面左側 [**🙋 App Testers**]タブより、開発に関わる別のユーザーを`INVITE`する。
