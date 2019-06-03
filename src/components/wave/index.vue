<template>
  <div class="wave-box">
    <div class="balls" v-for="item in 5" :key="item">
      <div v-for="element in 3" :key="element + 5" :class="animationType"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    animationType: {
      type: String,
      default: 'wave',
    },
  },
  data() {
    return {
      typeList: [
        'slight',
        'wave',
        'simple',
        'mixture',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/compass.scss";
.wave-box {
  position: fixed;
  left: 0;
  bottom: px2rem(5px);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.balls {
  width: px2rem(60px);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.wave {
  width: px2rem(13px);
  height: px2rem(13px);
  border-radius: 50%;
  background-color: #f02933;
  transform: translateY(-100%);
  animation: wave 0.8s ease-in-out alternate infinite;
}

.wave:nth-of-type(1) {
  animation-delay: -0.4s;
}

.wave:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes wave {
  from {
    @include prefixer-value(transform, translateY(-100%) webkit moz o ms);
  }
  to {
    transform: translateY(100%);
  }
}

.simple {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
}

.simple:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

.simple:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}

.slight {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
  animation: fade 0.8s ease-in-out alternate infinite;
}

.slight:nth-of-type(1) {
  animation-delay: -0.4s;
}

.slight:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.mixture {
  width: px2rem(13px);
  height: px2rem(13px);
  border-radius: 50%;
  background-color: #f02933;
  transform: translateY(-100%);
  animation: mixture 0.8s ease-in-out alternate infinite;
}

.mixture:nth-of-type(1) {
  animation-delay: -0.4s;
  transform: translateX(-100%);
}

.mixture:nth-of-type(2) {
  animation-delay: -0.2s;
  transform: translateX(-95%);
}

@keyframes mixture {
  from {
    @include prefixer-value(transform, translateY(-100%) webkit moz o ms);
  }
  to {
    transform: translateY(100%);
  }
}

@keyframes mixture {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes mixture {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
