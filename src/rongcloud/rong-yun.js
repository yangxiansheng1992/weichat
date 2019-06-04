
export default {
  init(params, callbacks, modules) {
    var appKey = params.appKey;
    var token = params.token;
    // var navi = params.navi || "";
 
    modules = modules || {};
    var RongIMLib = modules.RongIMLib || window.RongIMLib;
    var RongIMClient = RongIMLib.RongIMClient;
    // var protobuf = modules.protobuf || null;
 
    var config = {};
 
    var dataProvider = null;
    var imClient = params.imClient;
    if (imClient) {
      dataProvider = new RongIMLib.VCDataProvider(imClient);
    }
    RongIMLib.RongIMClient.init(appKey, dataProvider, config);
    //语音播放初始化
    RongIMLib.RongIMVoice.init();
 
    var instance = RongIMClient.getInstance();
 
    // 连接状态监听器
    RongIMClient.setConnectionStatusListener({
      onChanged: function(status) {
        // console.log(status);
        switch (status) {
          case RongIMLib.ConnectionStatus["CONNECTED"]:
          case 0:
            console.log("连接成功");
            callbacks.getInstance && callbacks.getInstance(instance);
            break;
 
          case RongIMLib.ConnectionStatus["CONNECTING"]:
          case 1:
            console.log("连接中");
            break;
 
          case RongIMLib.ConnectionStatus["DISCONNECTED"]:
          case 2:
            console.log("当前用户主动断开链接");
            break;
 
          case RongIMLib.ConnectionStatus["NETWORK_UNAVAILABLE"]:
          case 3:
            console.log("网络不可用");
            break;
 
          case RongIMLib.ConnectionStatus["CONNECTION_CLOSED"]:
          case 4:
            console.log("未知原因，连接关闭");
            break;
 
          case RongIMLib.ConnectionStatus["KICKED_OFFLINE_BY_OTHER_CLIENT"]:
          case 6:
            alert("用户账户在其他设备登录，本机会被踢掉线");
            break;
 
          case RongIMLib.ConnectionStatus["DOMAIN_INCORRECT"]:
          case 12:
            console.log("当前运行域名错误，请检查安全域名配置");
            break;
        }
      }
    });
 
    //开始链接
    RongIMClient.connect(
      token,
      {
        onSuccess: function(userId) {
          callbacks.getCurrentUser &&
            callbacks.getCurrentUser({
              userId: userId
            });
          console.log("链接成功，用户id：" + userId);
        },
        onTokenIncorrect: function() {
          console.log("token无效");
        },
        onError: function(errorCode) {
          console.log(errorCode);
        }
      },
      params.userId
    );
    /*
        文档：http://www.rongcloud.cn/docs/web.html#3、设置消息监听器
        注意事项：
            1：为了看到接收效果，需要另外一个用户向本用户发消息
            2：判断会话唯一性 ：conversationType + targetId
            3：显示消息在页面前，需要判断是否属于当前会话，避免消息错乱。
            4：消息体属性说明可参考：http://rongcloud.cn/docs/api/js/index.html
        */
 
    RongIMClient.setOnReceiveMessageListener({
      // 接收到的消息
      onReceived: function(message) {
        // 判断消息类型
        // console.log("新消息: " + message.targetId);
        // console.log(message);
        // 判断消息类型
        switch (message.messageType) {
          case RongIMClient.MessageType.TextMessage:
            // message.content.content => 消息内容
            break;
          case RongIMClient.MessageType.VoiceMessage:
            // message.content.content 格式为 AMR 格式的 base64 码
            break;
          case RongIMClient.MessageType.ImageMessage:
            // message.content.content => 图片缩略图 base64。
            // message.content.imageUri => 原图 URL。
            break;
          case RongIMClient.MessageType.DiscussionNotificationMessage:
            // message.content.extension => 讨论组中的人员。
            break;
          case RongIMClient.MessageType.RichContentMessage:
            // message.content.content => 文本消息内容。
            // message.content.imageUri => 图片 base64。
            // message.content.url => 原图 URL。
            break;
        }
        callbacks.receiveNewMessage && callbacks.receiveNewMessage(message);
      }
    });
  }
};