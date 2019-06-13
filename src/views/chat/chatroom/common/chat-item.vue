<template>
  <div class="item">
    <MyChat v-if="data.msgType === 'my'" :data="data" />
    <FriendCaht v-if="data.msgType === 'friend'" :data="data" />
  </div>
</template>
<script>
import MyChat from './my-chat';
import UserStorage from '@/storage/user';
import FriendCaht from './friend-chat';

export default {
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  computed: {
    userId () {
      return UserStorage.getUserInfo().user_id
    }
  },
  components: {
    MyChat,
    FriendCaht,
  }
}
</script>
<style lang="scss" scoped>
</style>
