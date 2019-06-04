<template>
  <div class="user">
    <Head :title="userinfo.title" :isSearchShow="isSearchShow" />
    <main>
      我是用户设置
    </main>
  </div>
</template>
<script>
import Head from '@/components/head/index';
export default {
  name: 'user-set',
  components: {
    Head,
  },
  computed: {
    userinfo () {
      return { ...this.$route.params.userinfo };
    }
  },
  data () {
    return {
      isSearchShow: false,
    }
  },
  created () {
    console.log(this.$route.params.userinfo);
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
.user {
  width: 100%;
  height: 100%;
}
.user {
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

