<template>
  <div class="video">
    <scroll class="scroll">
      <div class="content">
        <Head :title="userData.title" :isSearchShow="isSearchShow"></Head>
        <main>
          <div class="wrapper">
            <iframe-animate :animateType="animateType" />
          </div>
        </main>
        <footer>
          <div class="menu">
            <mt-button size="large" @click="showmenu">打开菜单</mt-button>
          </div>
        </footer>
      </div>
      <iframe src="static/iframe/canvas/index.html" class="iframe"></iframe>
    </scroll>
    <PopMenu :animateList="animateList" ref="menu" />
  </div>
</template>
<script>
import Head from '@/components/head';
import Scroll from '@/components/scroll';
import IframeAnimate from '@/components/iframe/iframeAnimate.vue';
import PopMenu from '../components/popup-menu/index';

export default {
  name: 'animation-page',
  components: {
    Head,
    Scroll,
    IframeAnimate,
    PopMenu,
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    },
  },
  data () {
    return {
      isSearchShow: false,
      animateType: 'bjpk10',
      animateList: [
        { name: "北京pk10", type: 'bjpk10' },
        { name: "重庆时时彩", type: 'cqssc' },
        { name: "广西快三", type: 'gxk3' },
        { name: "幸运飞艇", type: 'xyft' },
      ],
    }
  },
  methods: {
    showmenu () {
      this.$refs.menu.show();
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
