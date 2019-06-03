<template>
  <div class="chatroom">
    <Head :title="userData.title" :isSearchShow="isSearchShow">
      <div class="icon-right" slot="right" @click="toUserSet">
        <font-awesome-icon icon="ellipsis-h" />
      </div>
    </Head>
    <main>
      我是聊天室
    </main>
  </div>
</template>
<script>
import Head from '../../components/head';
export default {
  name: 'chatroom',
  components: {
    Head,
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    }
  },
  data () {
    return {
      isSearchShow: false,
    }
  },
  methods: {
    toUserSet () {
      console.log(123);
      this.$router.push({
        name: 'user-set',
        params: {
          userinfo: this.userData,
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/compass.scss";
.icon-right {
  width: 100%;
  height: 100%;
}
.chatroom {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    width: 100%;
    height: 100%;
    padding-top: px2rem(50px);
    overflow: hidden;
  }
}
</style>
