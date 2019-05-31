<template>
  <div class="chatroom">
    我是聊天室
  </div>
</template>
<script>
export default {
  name: 'chatroom',
  created () {
    console.log(this.$route.params.chatItemData);
  }
}
</script>
<style lang="scss" scoped>
</style>
