/**
 * 指定されたroomにメッセージを送信する
 * @param {*} textRoom Channelクラス
 * @param {*} message  通知するメッセージ
 * @returns 
 */
export const sendMessage = (textRoom, message) => {
    if(!!message) {
        textRoom.send(message);
    }
    return;
}