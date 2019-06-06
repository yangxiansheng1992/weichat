<template>
  <div class="video">
    <Head :title="userData.title" :isSearchShow="isSearchShow"></Head>
    <main>
      <scroll class="scroll">
        <div class="wrapper">
          <div class="iframe-box"></div>
        </div>
      </scroll>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import Head from '@/components/head';
import Scroll from '@/components/scroll';

export default {
  name: 'chatroom',
  components: {
    Head,
    Scroll,
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
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
