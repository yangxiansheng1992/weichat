import './RongIMLib-2.4.0.min';

/* eslint-disable no-undef */
const { RongIMClient } = RongIMLib;

export default class rongCloudMethods {
  /**
   * 初始化
   * @param {*} params
   * @param {*} callbacks
   */
  static init (params, callbacks) {
    const { appKey } = params;

    RongIMClient.init(appKey);

    // 连接状态监听器
    this.setConnectionStatusListener(callbacks);
    // 设置消息监听器
    this.setOnReceiveMessageListener(callbacks);

    // 开始链接融云
    this.connect(params, callbacks);
    this.instance = RongIMClient.getInstance();
  }

  /**
   *链接rongCloud
   * @param {*} params
   */
  static connect (params, callbacks) {
    const { token } = params;
    RongIMClient.connect(token, {
      onSuccess (userId) {
        if (callbacks.connectSuccess) {
          callbacks.connectSuccess(userId);
        }
      },
      onTokenIncorrect () {
        callbacks.onError('token无效');
      },
      onError (errorCode) {
        console.log(errorCode);
        let message;
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            message = '服务器连接超时';
            break;
          case RongIMLib.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:
            message = '不可接受的协议版本';
            break;
          case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
            message = 'appkey不正确';
            break;
          case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
            message = '消息服务暂时不可用';
            break;
          default:
        }
        callbacks.onError(message);
      },
    });
  }

  /**
   *连接状态监听器
   * @param {*} callbacks
   */
  static setConnectionStatusListener (callbacks) {
    const that = this;
    RongIMClient.setConnectionStatusListener({
      onChanged (status) {
        const data = {};
        switch (status) {
          case RongIMLib.ConnectionStatus.CONNECTED:
          case 0:
            data.code = 0;
            data.message = '连接成功';
            console.log('rc连接成功');
            if (callbacks.getInstance) {
              callbacks.getInstance(that.instance);
            }
            break;
          case RongIMLib.ConnectionStatus.CONNECTING:
          case 1:
            console.log('连接中');
            data.code = 1;
            data.message = '连接中';
            break;

          case RongIMLib.ConnectionStatus.DISCONNECTED:
          case 2:
            data.code = 2;
            data.message = '连接断开，请检查网络状况或刷新重试！';
            console.log('当前用户主动断开链接');
            break;

          case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
          case 3:
            data.code = 3;
            data.message = '网络不可用，请检查网络状况';
            console.log('网络不可用');
            break;

          case RongIMLib.ConnectionStatus.CONNECTION_CLOSED:
          case 4:
            data.code = 4;
            data.message = '未知原因，连接断开，请检查网络状况或刷新重试！';
            console.log('未知原因，连接关闭');
            break;

          case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
          case 6:
            data.code = 6;
            data.message = '您已在其他设备登录，本机被踢掉线';
            console.log('用户账户在其他设备登录，本机被踢掉线');
            break;

          case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
          case 12:
            data.code = 6;
            data.message = '当前运行域名错误，请检查安全域名配置';
            console.log('当前运行域名错误，请检查安全域名配置');
            break;
          default:
        }
        callbacks.connectionStatusListener(data);
      },
    });
  }

  /**
   * 设置消息监听器
   *文档：http://www.rongcloud.cn/docs/web.html#3、
   *注意事项：
   *为了看到接收效果，需要另外一个用户向本用户发消息
   *判断会话唯一性 ：conversationType + targetId
   *显示消息在页面前，需要判断是否属于当前会话，避免消息错乱。
   *消息体属性说明可参考：http://rongcloud.cn/docs/api/js/index.html
   */
  static setOnReceiveMessageListener (callbacks) {
    RongIMClient.setOnReceiveMessageListener({
      onReceived (message) {
        // 判断消息类型
        switch (message.messageType) {
          case RongIMClient.MessageType.TextMessage:
            // message.content.content => 消息内容
            break;
          case RongIMClient.MessageType.ImageMessage:
            // message.content.content => 图片缩略图 base64。
            // message.content.imageUri => 原图 URL。
            break;
          case RongIMClient.MessageType.PersonMessage:
            // 自定义消息
            break;
          case RongIMClient.MessageType.UnknownMessage:
            // do something
            break;
          default:
          // do something...
        }
        if (callbacks.receiveNewMessage) {
          callbacks.receiveNewMessage(message);
        }
      },
    });
  }

  /**
   * 启动
   * @param {*} appKey
   * @param {*} token
   * @param {*} userId
   * @param {*} callbacks
   */
  static start ({
    appKey, token, userId, callbacks,
  }) {
    const params = {
      appKey,
      token,
      userId,
    };

    this.init(params, callbacks);
    console.log('初始化 应用');
  }

  /**
   * 断开融云服务
   */
  static disconnect () {
    /*
    文档：http://www.rongcloud.cn/docs/api/js/RongIMClient.html
    */
    this.instance.disconnect();
    console.log('断开链接');
  }

  /**
   * 重连接融云服务
   */
  static reconnect ({ success, error }) {
    /*
    1: reconnect 是重新连接，并没有重连机制，调用此方法前应该进行网络嗅探，网络正常再调用 reconnect。
    2: 提示其他设备登录请勿调用重连方法。
      3: docs   http://www.rongcloud.cn/docs/api/js/RongIMClient.html
    */
    RongIMClient.reconnect({
      onSuccess (userId) {
        success('重新连接成功');
        console.log(`重新链接成功，用户id：${userId}`);
      },
      onTokenIncorrect () {
        error('重新链接失败，token无效');
        console.log('重新链接失败，token无效');
      },
      onError (errorCode) {
        let info = '';
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
          case RongIMLib.ErrorCode.UNKNOWN_ERROR:
            info = '未知错误';
            break;
          case RongIMLib.ErrorCode.UNACCEPTABLE_PROTOCOL_VERSION:
            info = '不可接受的协议版本';
            break;
          case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
            info = 'appkey不正确';
            break;
          case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
            info = '服务器不可用';
            break;
          default:
        }
        error(info);
        console.log(`重新链接失败，原因：${info}`);
      },
    });
  }

  /**
  *发送消息
  * @param targetId 接收用户|群组|聊天室|系统账户 Id
  * @param conversationType 消息类型: PRIVATE私聊|GROUP群组|CHATROOM聊天室|SYSTEM系统会话
  * @param msg 发送消息内容
  */
  static sendMessage ({
    conversationType, targetId, msg, extra, success, error,
  }) {
    const content = new RongIMLib.TextMessage({ content: msg, extra });
    const ConversationType = RongIMLib.ConversationType[conversationType];
    RongIMClient.getInstance().sendMessage(ConversationType, targetId, content, {
      onSuccess (message) {
        console.log('发送消息成功>>>>>>>>>>>>>>>>');
        console.log(message);
        if (success) {
          success(message);
        }
      },
      onError (errorCode, message) {
        let info = '';
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
          case RongIMLib.ErrorCode.UNKNOWN:
            info = '未知错误';
            break;
          case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
            info = '在黑名单中，无法向对方发送消息';
            break;
          case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
            info = '不在讨论组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_GROUP:
            info = '不在群组中';
            break;
          case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
            info = '不在聊天室中';
            break;
          default:
        }
        if (error) {
          error({ info, message });
        }
        console.log(`发送失败: ${info}${errorCode}`);
      },
    });
  }

  /**
   *加入聊天室
   * @param {*} { chatRoomId, count拉取最近聊天最多50条, success, error }
   */
  static joinChatRoom ({
    chatRoomId, count = 0, success, error,
  }) {
    RongIMClient.getInstance().joinChatRoom(chatRoomId, count, {
      onSuccess () {
        // 加入聊天室成功。
        console.log('加入聊天室成功。');
        if (success) {
          success(true);
        }
      },
      onError (errorCode) {
        // 加入聊天室失败
        if (error) {
          switch (errorCode) {
            case -1:
              error('网络超时');
              break;
            default:
              error('加入聊天室失败');
              break;
          }
        }
      },
    });
  }

  /**
   *退出聊天室
   * @param {*} { chatRoomId, success, error }
   */
  static quitChatRoom ({ chatRoomId, success, error }) {
    RongIMClient.getInstance().quitChatRoom(chatRoomId, {
      onSuccess () {
        // 退出聊天室成功。
        console.log('退出聊天室成功。');
        if (success) {
          success(true);
        }
      },
      onError (errorCode) {
        // 退出聊天室失败。
        if (error) {
          switch (errorCode) {
            case -1:
              error('网络超时');
              break;
            default:
              error('退出聊天室失败');
              break;
          }
        }
      },
    });
  }

  /**
   *获取聊天室信息
   * @param {*} { chatRoomId, count获取聊天室人数(0-20), success, error }
   */
  static getChatRoomInfo ({
    chatRoomId, count, success, error,
  }) {
    const order = RongIMLib.GetChatRoomType.REVERSE;// 排序方式。
    RongIMClient.getInstance().getChatRoomInfo(chatRoomId, count, order, {
      onSuccess (chatRoom) {
        // chatRoom => 聊天室信息。
        // chatRoom.userInfos => 返回聊天室成员。
        // chatRoom.userTotalNums => 当前聊天室总人数。
        if (success) {
          success(chatRoom);
        }
      },
      onError (message) {
        // 获取聊天室信息失败。
        if (error) {
          error(message);
        }
      },
    });
  }

  /**
   * 获取聊天室历史消息
   * @param {*} {chatRoomId, count = 20, order = 1, success, error,}
   * @param count <= 200
   * @param order 1:正序 0:倒序
   */
  static getChatRoomHistoryMessages ({
    chatRoomId, count = 20, order = 1, success, error,
  }) {
    RongIMClient.getInstance().getChatRoomHistoryMessages(
      chatRoomId,
      count,
      order,
      {
        onSuccess (list, hasMore) {
          // list => 消息数组
          // hasMore => 是否有更多的历史消息
          if (success) {
            success(list, hasMore);
          }
        },
        onError (message) {
          if (error) {
            error(message);
          }
        },
      },
    );
  }

  /**
   *
   *
   * @param {*} type 消息名称。
   * @param {*} propertys 消息类中的属性名。
   */
  static registerMessage (type, propertys) {
    const messageName = type;
    const objectName = `s:${type}`; // 消息内置名称
    const mesasgeTag = new RongIMLib.MessageTag(true, true); // true true 保存且计数，false false 不保存不计数。
    RongIMClient.registerMessageType(messageName, objectName, mesasgeTag, propertys);
  }

  static async sendPersonMessage ({
    conversationType, targetId, content, success, error,
  }) {
    const propertys = ['msgType', 'msg', 'avatar', 'sentUser'];
    this.registerMessage('PersonMessage', propertys);
    const msg = new RongIMClient.RegisterMessage.PersonMessage(content);
    const ConversationType = RongIMLib.ConversationType[conversationType];
    await RongIMClient.getInstance().sendMessage(ConversationType, targetId, msg, {
      onSuccess (message) {
        if (success) {
          success(message);
        }
      },
      onError (errorCode, message) {
        let info = '';
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
          case RongIMLib.ErrorCode.UNKNOWN:
            info = '未知错误';
            break;
          case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
            info = '不在聊天室中';
            break;
          case RongIMLib.ErrorCode.RC_CHATROOM_USER_KICKED:
            info = '您已被踢出并禁止加入聊天室。';
            break;
          case RongIMLib.ErrorCode.FORBIDDEN_IN_CHATROOM:
            info = '您在该聊天室中已被禁言。';
            break;
          default:
        }
        if (error) {
          error(info, message);
        }
        // console.log(RongIMLib.ErrorCode);
      },
    });
  }
}
