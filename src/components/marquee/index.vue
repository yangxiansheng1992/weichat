<template>
  <div class="box">
    <font-awesome-icon
      icon="bullhorn"
      color="#E14844"
      class="font-icon move-animation"
    />
    <div class="wrap">
      <div id="box">{{ text }}</div>
      <div id="node">{{ text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Marquee',
  props: {
    marqueeStr: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      text: '',
      tiemr: null,
    };
  },
  methods: {
    move() {
      const { width } = document.getElementById('node').getBoundingClientRect();
      const startWidth = document.body.clientWidth;
      const box = document.getElementById('box');
      let distance = startWidth;
      setInterval(() => {
        distance -= 1;
        if (-distance >= width) {
          distance = startWidth;
        }
        box.style.transform = `translateX(${distance}px)`;
      }, 10);
    },
  },
  mounted() {
    for (let i = 0; i < this.marqueeStr.length; i++) {
      this.text += ` ${this.marqueeStr[i]}`;
    }
  },
  updated() {
    this.move();
  },
};
</script>
<style lang='scss' scoped>
@import "@/styles/compass.scss";
@import "@/styles/color.scss";
.box {
  width: 92%;
  margin: 0 6% 2%;
  display: flex;
  flex-direction: row;
  .font-icon {
    margin-left: px2rem(-10px);
    margin-top: px2rem(6px);
  }
}
.wrap {
  position: relative;
  width: 99%;
  margin-left: 1%;
  min-height: px2rem(30px);
  background-color: #fffef9;
  overflow: hidden;
  top: 0;
  left: 0;
  #box {
    width: 100%;
    line-height: px2rem(30px);
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
  }
  #node {
    position: absolute;
    z-index: -999;
    top: -999999px;
    white-space: nowrap;
  }
}

.move-animation {
  animation: move 1s infinite;
}
@keyframes move {
  0% {
    @include prefixer-value(
      transform,
      translateY(px2rem(0px)),
      webkit moz o ms
    );
  }
  25% {
    @include prefixer-value(
      transform,
      translateY(px2rem(2px)),
      webkit moz o ms
    );
  }
  50% {
    @include prefixer-value(
      transform,
      translateY(px2rem(4px)),
      webkit moz o ms
    );
  }
  75% {
    @include prefixer-value(
      transform,
      translateY(px2rem(2px)),
      webkit moz o ms
    );
  }
  100% {
    @include prefixer-value(
      transform,
      translateY(px2rem(0px)),
      webkit moz o ms
    );
  }
}
</style>
