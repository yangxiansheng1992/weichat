import Api from '../config/Api';
import RYurl from '../config/RY-config'
import rongCloud from './rong-yun';
import store from 'vuex';
import UserStorage from '../storage/user';

export default class RYtool {
  /**
   * 获取用户token，
   * @param {用户名} user_id 
   * @param {用户头像} avatar 
   */
  static rongCloudStart () {
    const { user_id } = UserStorage.getUserInfo();
    Api.getRongCloudToken({
      userId: user_id,
      name: user_id,
      portraitUrl: RYurl.avatar,
    }).then((res) => {
      console.log(res);
      const { token, userId } = res;
      store.commit('setRongCloudToken', token);
      this.connectRongCloud(token, userId);
    });
  }

  /**
 * 链接融云服务
 * @param {*} token
 * @param {*} userId
 */
  static connectRongCloud (token, userId) {
    const { appKey } = RYurl;
    rongCloud.start({
      appKey,
      token,
      userId,
      callbacks: {
        connectSuccess: () => {
          //连接成功就奖成功的状态存入store;
          store.commit('setRongCloudConnect', true);
        },
        connectionStatusListener: (res) => {
          this.connectionStatusListener(res);
        },
        receiveNewMessage: (message) => {
          this.receiveNewMessage(message);
        },
        onError: (message) => {
          console.log(message);
        },
      },
    });
  }
  /**
   * 监听收到消息
   * @param {*} message
   */
  static receiveNewMessage (message) {
    const { content } = message.content.message || message;
    store.commit('addChatList', this.makeChatDetailData(
      content.msgType,
      content.msg,
      content.avatar,
      content.sentUser,
      message.messageId,
      message.targetId,
      message.receivedTime,
      message.sentTime,
    ));
  }

  /**
   * 格式化聊天室資料
   * @param msgType
   * @param msg
   * @param avatar
   * @param sentUser
   * @param messageId
   * @param targetId
   * @param receivedTime
   * @param sentTime
   * @returns {{msg: *, targetId: *, receivedTime: *,
    * messageId: *, sentTime: *, avatar: *, type: *, sentUser: *}}
    */
  static makeChatDetailData (
    msgType,
    msg,
    avatar,
    sentUser,
    messageId,
    targetId,
    receivedTime,
    sentTime,
  ) {
    return {
      msgType,
      msg,
      avatar,
      sentUser,
      messageId,
      targetId,
      receivedTime,
      sentTime,
    };
  }

}