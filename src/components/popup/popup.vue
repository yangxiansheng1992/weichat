<template>
  <mt-popup v-model="isShow" pop-transition="popup-fade" :style="popStyle">
    <div class="modal-content" :style="style">
      <span class="close-icon" @click="hide">
        <font-awesome-icon icon="times" color="#000" />
      </span>
      <div class="modal-info">
        <header class="head" v-if="title.length">{{ title }}</header>
        <slot name="content"></slot>
      </div>
    </div>
  </mt-popup>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#333',
    },
    width: {
      type: [String, Number],
      default: '80%',
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    style() {
      return { backgroundColor: this.color };
    },
    popStyle() {
      return { width: this.width };
    },
  },
  methods: {
    hide() {
      this.isShow = false;
    },
    show() {
      this.isShow = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
@import "@/styles/color.scss";
.mint-popup {
  border: px2rem(1px) solid $white;
  border-radius: px2rem(5px);
  background: transparent;
  opacity: 0.85;
  width: 90%;
}

/deep/.v-modal {
  opacity: 0.75;
}

.head {
  width: 100%;
  height: px2rem(30px);
  line-height: px2rem(30px);
  margin-bottom: px2rem(5px);
  font-size: px2rem(16px);
  font-weight: 600;
  text-align: center;
  color: $black;
}
.modal-content {
  min-width: px2rem(200px);
  border-radius: px2rem(5px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: $white;
  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: px2rem(22px);
    height: px2rem(22px);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(50%, -50%);
    background-color: $popup_close_icon;
    border: 1px solid $popup_close_icon;
  }
  .modal-info {
    width: 96%;
    height: 96%;
    padding: 2%;
  }
}
</style>
