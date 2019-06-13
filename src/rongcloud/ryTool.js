import Api from '../config/Api';
import RYurl from '../config/RY-config'
import rongCloudMethods from './rong-yun';
import { showToast, hideLoading, showLoading } from '../config/helper';
import store from '../vuex/store';
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
      const { token, userId } = res;
      console.log(token);
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
    rongCloudMethods.start({
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
 * 监听融云连接状态
 * @param {*} res
 */
  static connectionStatusListener (res) {
    const { code, message } = res;
    // const { path } = router.currentRoute;

    switch (code) {
      case 0:
        hideLoading();
        break;
      case 3:
        // 网络不可用
        RYtool.disconnect();
        showToast(message);
        break;
      case 4:
        // 未知原因，连接关闭
        RYtool.disconnect();
        showToast(message);
        break;
      case 6:
        // 其他设备登录
        // UserService.forceLogout();
        RYtool.disconnect();
        showToast(message);
        break;
      case 12:
        // 域名不正确
        RYtool.disconnect();
        showToast(message);
        break;
      default:
        break;
    }
  }
  /**
   * 监听收到消息
   * @param {*} message
   */
  static receiveNewMessage (message) {
    const { content } = message.content.message || message;
    console.log('监听收到的消息')
    console.log(message);
    if (UserStorage.getUserInfo().user_id === content.sentUser) {
      content.msgType = 'my'
    } else {
      content.msgType = 'friend'
    }
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
   * 发送融云自定义消息
   * @param {*} { conversationType, targetId, content, success, error,}
   * @param content: { msgType: user用户|plan开奖计划|win|开奖信息, msg: 消息, avatar: 头像, }
   * content可以拓展其他的自定义信息，type可以拓展自己定义消息类型，
   */
  static sendPersonMessage ({
    conversationType,
    targetId,
    content,
    success,
  }) {
    const ConversationType = conversationType || 'CHATROOM'
    rongCloudMethods.sendPersonMessage({
      conversationType: ConversationType,
      targetId,
      content,
      success: (message) => {
        // RYtool.getChatRoomInfo();
        store.commit('addChatList', this.makeChatDetailData(
          message.content.msgType,
          message.content.msg,
          message.content.avatar,
          message.content.sentUser,
          message.messageId,
          message.targetId,
          message.receivedTime,
          message.sentTime,
        ));
        if (success) { success(message); }
      },
      error: info => showToast(info + "sss"),
    });
  }
  // /**
  //  * 获取聊天室信息
  //  * @param chatRoomId
  //  */
  // static getChatRoomInfo () {
  //   const { lotteryId } = router.currentRoute.query;
  //   rongCloudMethods.getChatRoomInfo({
  //     chatRoomId: String(lotteryId),
  //     count: 20,
  //     success: chatRoom => store.commit('SET_CHATROOM_USER_NUMS', chatRoom.userTotalNums),
  //     error: message => showToast(message),
  //   });
  // }
  /**
   * 加入聊天室
   * @param {*} { chatRoomId, success}
   */
  static joinChatRoom = ({ chatRoomId, success }) => {
    showLoading('加入中...');
    rongCloudMethods.joinChatRoom({
      chatRoomId,
      success: () => {
        hideLoading();
        // ChatService.getChatRoomInfo();
        success();
      },
      error: (message) => {
        hideLoading();
        showToast(message);
      },
    });
  }

  /**
   * 退出聊天室
   * @param {*} { chatRoomId, success }
   */
  static quitChatRoom = ({ chatRoomId, success }) => {
    showLoading('退出中...');
    rongCloudMethods.quitChatRoom({
      chatRoomId,
      success: () => {
        hideLoading();
        success();
      },
      error: (message) => {
        hideLoading();
        showToast(message);
      },
    });
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

  /**
   * 退出登录断开连接
   */
  static disconnect () {
    rongCloudMethods.disconnect();
  }

}