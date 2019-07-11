<template>
  <div class="chat-item">
    <div class="chat-msg">
      <p class="time">{{ data.sentUser }}</p>
      <div class="msg">
        {{ data.msg }}
      </div>
    </div>
    <div class="chat-user">
      <div class="img-box">
        <img :src="data.avatar" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => { },
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./chat.scss";
.chat-item {
  margin-left: 10%;
  justify-content: flex-end;
}
.time {
  direction: rtl;
}
.msg {
  right: 0;
}
.msg::after {
  content: "";
  width: 0;
  height: 0;
  border-width: px2rem(6px);
  border-style: solid;
  border-color: transparent transparent transparent $chatroom_msg_bg;
  position: absolute;
  top: px2rem(4px);
  right: -12px;
}
</style>
