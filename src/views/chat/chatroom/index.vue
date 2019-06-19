<template>
  <div class="chatroom">
    <Head :title="userData.title" :isSearchShow="isSearchShow">
      <div class="icon-right" slot="right" @click="toUserSet">
        <font-awesome-icon icon="ellipsis-h" />
      </div>
    </Head>
    <main>
      <scroll class="scroll" :data="chatList">
        <div class="wrapper">
          <chat-item
            :data="item"
            v-for="(item, index) in chatList"
            :key="item.time + item.msg + index * 2"
          />
        </div>
      </scroll>
    </main>
    <footer>
      <quill-editor />
      <!-- <div class="input-box">
        <input type="text" name="" id="" v-model="userText" />
      </div>
      <div class="btn" @click="sendMsg">
        <mt-button>发送</mt-button>
      </div> -->
    </footer>
  </div>
</template>
<script>
import Head from '@/components/head';
import { mapState } from 'vuex';
import UserStorage from '@/storage/user';
import ChatItem from './common/chat-item';
import { toolkit, showToast } from '@/config/tool';
import Scroll from '@/components/scroll';
import RYtool from '@/rongcloud/ryTool';
import QuillEditor from '../../../components/quillEditor/index';

const avatar = 'https://www.bs7010.com//images/avatar/default.jpg';

export default {
  name: 'chatroom',
  components: {
    Head,
    ChatItem,
    Scroll,
    QuillEditor,
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    },
    ...mapState({
      chatList: state => state.chatList,
      rcConnectStatus: state => state.rcConnectStatus,
    }),
  },
  data () {
    return {
      isSearchShow: false,
      userText: '',
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.joinChatRoom());
  },
  methods: {
    toUserSet () {
      this.$router.push({
        name: 'user-set',
        params: {
          userinfo: this.userData,
        }
      })
    },
    sendMsg () {
      if (toolkit.deleteBlank(this.userText)) {
        showToast('内容不能为空')
      } else {
        const { user_id } = UserStorage.getUserInfo();
        this.sendPersonMessage('my', this.userText, user_id);

        // this.chatList.push({
        //   img: require('../../../assets/images/find/bg.png'),
        //   time: this.$day().format("HH:mm:ss"),
        //   msg: this.userText,
        //   msgType: 'my',
        //   target: 'thomas'
        // })
        this.scrollEnd();
        this.userText = '';
      }
    },
    scrollEnd () {
      //发送消息，让最新的一个消息显示出来；
      var list = document.querySelectorAll(".item");
      if (list.length > 1) {
        var last = list[list.length - 1];
        last.scrollIntoView();
      }
    },
    //发送消息
    sendPersonMessage (msgType, msg, sentUser) {
      RYtool.sendPersonMessage({
        targetId: 'chatroom',
        content: {
          msgType,
          msg,
          avatar: avatar,
          sentUser,
        },
        success: () => {
          console.log('发送成功获取消息列表')
          console.log(this.chatList);
          showToast('发送成功');
        },
      });
    },
    //加入聊天室
    joinChatRoom () {
      if (this.rcConnectStatus) {
        RYtool.joinChatRoom({
          chatRoomId: 'chatroom',
          success: () => {
            showToast(`欢迎来到《lol开黑群》,勇往直前，冲啊!\n`);
          },
        });
      }
    },
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
