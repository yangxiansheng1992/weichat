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
          <glossy-3d-button v-show="popupSlot === 'Glossy3dButton'" />
          <rectangular-loader v-show="popupSlot === 'RectangularLoader'" />
          <toggle-checkbox v-show="popupSlot === 'ToggleCheckbox'" />
          <text-3d-marquee
            v-show="popupSlot === 'Text3dMarquee'"
            text="3d跑马灯"
          />
          <contentric-arc-rotating
            v-show="popupSlot === 'ContentricArcRotating'"
          />
          <broken-text v-show="popupSlot === 'BrokenText'" />
          <mask-image v-show="popupSlot === 'MaskImage'" />
        </div>
      </PcPopup>
    </main>
  </div>
</template>
<script>
import Head from '@/components/head';
import MeButton from '@/components/button/index.vue';
import PcPopup from '@/components/pcPopup/index';
import Glossy3dButton from './components/Glossy-3d-button';
import RectangularLoader from './components/Rectangular-loader';
import ToggleCheckbox from './components/Toggle-checkbox';
import Text3dMarquee from './components/Text-3d-marquee';
import ContentricArcRotating from './components/Contentric-arc-rotating';
import BrokenText from './components/Broken-text';
import MaskImage from './components/Mask-image';

export default {
  components: {
    Head,
    MeButton,
    PcPopup,
    Glossy3dButton,
    RectangularLoader,
    ToggleCheckbox,
    Text3dMarquee,
    ContentricArcRotating,
    BrokenText,
    MaskImage,
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
        { title: '金属光泽按钮', showName: 'Glossy3dButton' },
        { title: '矩形loading动画', showName: 'RectangularLoader' },
        { title: '切换开关', showName: 'ToggleCheckbox' },
        { title: '3d跑马灯', showName: 'Text3dMarquee' },
        { title: '同心圆弧加载动画', showName: 'ContentricArcRotating' },
        { title: '破裂文字效果', showName: 'BrokenText' },
        { title: 'mask效果', showName: 'MaskImage' },
      ],
      animateName: '',
      popupSlot: '',
    }
  },
  methods: {
    showPopup (data) {
      this.$refs.popup.show();
      this.popupSlot = data.showName;
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