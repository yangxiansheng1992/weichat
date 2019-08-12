<template>
  <div class="css-box">
    <Head :title="userData.title" :isSearchShow="isSearchShow"> </Head>
    <main>
      <MeButton
        :class="animateName"
        v-for="item in cssList"
        :key="item.title"
        :text="item.title"
        @click.native="showPopup(item)"
      />
      <PcPopup ref="popup">
        <div slot="content" class="content">
          <Glossy3dButton v-show="popupSlot === 'glossy3dButton'" />
          <RectangularLoader v-show="popupSlot === 'RectangularLoader'" />
        </div>
      </PcPopup>
    </main>
  </div>
</template>
<script>
import Head from '@/components/head';
import MeButton from '@/components/button/index.vue';
import PcPopup from '@/components/pcPopup/index';
import Glossy3dButton from './components/Glossy-3d-button'
import RectangularLoader from './components/Rectangular-loader'

export default {
  components: {
    Head,
    MeButton,
    PcPopup,
    Glossy3dButton,
    RectangularLoader,
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    }
  },
  data () {
    return {
      isSearchShow: false,
      cssList: [
        { title: '金属光泽按钮', showName: 'glossy3dButton' },
        { title: '矩形loading动画', showName: 'RectangularLoader' },
      ],
      animateName: '',
      popupSlot: 'glossy3dButton',
    }
  },
  methods: {
    showPopup (data) {
      this.popupSlot = data.showName;
      this.$refs.popup.show();
    },
    hidePopup () {
      this.$refs.popup.hide();
    },
  },
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
@import "@/styles/animate.scss";
.css-box {
  width: 100%;
  height: 100%;
  main {
    width: 100%;
    @include prefixer-value(height, calc(100% - 3.125rem), webkit moz o ms);
    background-color: #afdfe4;
    overflow: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    .btn {
      margin-top: 10px;
    }
  }
  .content {
    height: 100%;
  }
}
</style>