<template>
  <div class="video">
    <Head :title="userData.title" :isSearchShow="isSearchShow"></Head>
    <main>
      <scroll class="scroll">
        <div class="wrapper">
          <div class="iframe-box">
            <Iframe-animate animateType="canvas" />
          </div>
        </div>
      </scroll>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import Head from '@/components/head';
import Scroll from '@/components/scroll';
import IframeAnimate from '../../../components/iframe/iframeAnimate';

export default {
  name: 'chatroom',
  components: {
    Head,
    Scroll,
    IframeAnimate
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
