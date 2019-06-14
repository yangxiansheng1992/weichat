<template>
  <div class="iframe-box">
    <iframe
      :src="animateSrc"
      class="iframe"
      ref="iframe"
      @load="changeData"
    ></iframe>
  </div>
</template>
<script>

export default {
  props: {
    animateType: {
      type: [String, Number],
      required: true,
    },
  },
  watch: {
    animateType () {
      this.updateAnimateSrc();
    },
  },
  data () {
    return {
      animateSrc: "",
    }
  },
  mounted () {
    this.updateAnimateSrc();
  },
  methods: {
    updateAnimateSrc () {
      this.animateSrc = `static/iframe/${this.animateType}/index.html`;
    },
    changeData () {

    }
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
