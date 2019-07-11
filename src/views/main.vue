<template>
  <div class="box">
    <Head
      :title="title"
      :isSearchShow="isSearchShow"
      :isLeftShow="isLeftShow"
      :bgColor="bgColor"
    >
      <div class="icon-box" @click="showMenu(iconType)" slot="right">
        <font-awesome-icon :icon="iconType" :color="iconColor" />
      </div>
    </Head>
    <div class="option">
      <OptionAction ref="optionAction" />
    </div>
    <main>
      <Scroll class="scroll">
        <router-view />
      </Scroll>
    </main>
    <tab-list />
  </div>
</template>

<script>
import Head from '../components/head/index';
import Scroll from '../components/scroll';
import TabList from '../components/tab/index';
import OptionAction from '@/components/option-action/index';

export default {
  name: 'App',
  components: {
    Head,
    Scroll,
    TabList,
    OptionAction
  },
  data () {
    return {
      isLogged: true,
      title: '微信',
      iconType: 'plus',
      isSearchShow: false,
      isLeftShow: false,
      bgColor: '#1e2b39',
      iconColor: '#fffffb',
    }
  },
  methods: {
    showMenu (iconType) {
      if (iconType === 'plus') {
        this.$refs.optionAction.$data.isShow = !this.$refs.optionAction.$data.isShow;
        return
      }
      console.log('打开摄像头');
    },
  },

};
</script>

<style lang="scss" scoped>
@import "../styles/compass.scss";
.icon-box {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .option {
    position: absolute;
    top: px2rem(60px);
    right: px2rem(20px);
    z-index: 5;
  }
  main {
    width: 100%;
    @include prefixer-value(height, calc(100% - 3.125rem), webkit moz o ms);
    overflow: hidden;
    .scroll {
      width: 100%;
      @include prefixer-value(height, calc(100% - 3.125rem), webkit moz o ms);
      @include prefixer(overflow-scrolling, touch, webkit moz o ms);
      @include prefixer(scroll-behavior, smooth, webkit moz o ms);
      overflow: auto;
    }
  }
}
</style>
