<template>
  <div class="iframe-box">
    <iframe
      id="other-iframe"
      :src="animateSrc"
      class="iframe"
      @load="deliverToken"
      :key="componentKey"
      ref="iframe"
    ></iframe>
  </div>
</template>
<script>

export default {
  props: {
    lotteryCode: {
      type: String,
      required: true,
    },
    lotteryId: {
      type: [String, Number],
      required: true,
    },
    animateData: {
      type: Object,
      required: true,
      default: () => { },
    },
  },
  data() {
    return {
      componentKey: 0,
      animateSrc: '',
      animateOption: {
        1: {
          animationDuration: 15000,
          fullAnimationDuration: 30000,
        },
        20: {
          animationDuration: 8000,
          fullAnimationDuration: 30000,
        },
        21: {
          animationDuration: 10000,
          fullAnimationDuration: 30000,
        },
        28: {
          animationDuration: 15000,
          fullAnimationDuration: 30000,
        },
      },
    };
  },
  watch: {
    animateData() {
      this.forceRerender();
      this.deliverToken();
    },
    lotteryCode() {
      this.updateAnimateSrc();
    },
  },
  mounted() {
    this.updateAnimateSrc();
  },
  methods: {
    updateAnimateSrc() {
      this.animateSrc = `/static/iframe/${this.animationGenre(this.lotteryCode)}/index.html`;
    },
    forceRerender() {
      this.componentKey += 1;
    },
    deliverToken() {
      const { animationDuration } = this.animateOption[this.lotteryId]
        || { animationDuration: 1500 };
      this.animateData.animationDuration = animationDuration;
      this.$refs.iframe.contentWindow.postMessage(this.animateData, '*');
    },
    createGxk3Data(
      marketCountDownTime,
      lockCountDownTime,
      lotteryNumber,
      periodicalTime,
      nextDrawBetTime,
    ) {
      return {
        marketCountDownTime,
        lockCountDownTime,
        lotteryNumber,
        periodicalTime,
        nextDrawBetTime,
      };
    },
    createCqsscData(
      marketCountDownTime,
      lockCountDownTime,
      lotteryNumber,
      periodicalTime,
    ) {
      return {
        marketCountDownTime,
        lockCountDownTime,
        lotteryNumber,
        periodicalTime,
      };
    },
    createFtData(
      marketCountDownTime,
      lockCountDownTime,
      lotteryNumber,
      periodicalTime,
      periodicalNumber,
    ) {
      return {
        marketCountDownTime,
        lockCountDownTime,
        lotteryNumber,
        periodicalTime,
        periodicalNumber,
      };
    },
    createPk10Data(
      marketCountDownTime,
      lockCountDownTime,
      lotteryNumber,
      periodicalTime,
      periodicalNumber,
    ) {
      return {
        marketCountDownTime,
        lockCountDownTime,
        lotteryNumber,
        periodicalTime,
        periodicalNumber,
      };
    },
    animationGenre(lotteryCode) {
      switch (lotteryCode) {
        case 'bjpk10':
          return 'bjpk10';
        case 'gxk3':
          return 'gxk3';
        case 'xyft':
          return 'xyft';
        case 'cqssc':
        case 'ffc':
          return 'cqssc';
        default:
          return '';
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$width: 100%;
$height: 100%;
.iframe-box {
  width: $width;
  height: $height;

  .iframe {
    width: $width !important;
    height: $height !important;
  }
}
</style>
