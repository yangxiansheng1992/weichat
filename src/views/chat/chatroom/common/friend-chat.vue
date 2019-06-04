<template>
  <div class="chat-item">
    <div class="chat-user">
      <div class="img-box">
        <img :src="data.img" alt="" />
      </div>
    </div>
    <div class="chat-msg">
      <p class="time">{{ data.time }}</p>
      <div class="msg">
        {{ data.msg }}
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
  margin-right: 10%;
  justify-content: flex-start;
}
.time {
  // direction: rtl;
}
.msg {
  left: 0;
}
.msg::before {
  content: "";
  width: 0;
  height: 0;
  border-width: px2rem(6px);
  border-style: solid;
  border-color: transparent $chatroom_msg_bg transparent transparent;
  position: absolute;
  top: px2rem(4px);
  left: -12px;
}
</style>
