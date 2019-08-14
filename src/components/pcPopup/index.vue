<template>
  <div class="modal" v-if="isShow" @click.self="hide">
    <div class="modal-content">
      <div class="modal-info">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  data () {
    return {
      isShow: false,
    };
  },
  computed: {
  },
  methods: {
    hide () {
      this.isShow = false;
    },
    show () {
      this.isShow = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
@import "@/styles/color.scss";
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.7);
  top: 0;
  left: 0;
  .modal-content {
    width: 50%;
    height: 50%;
    margin-left: 25%;
    margin-top: 12.5%;
    box-sizing: border-box;
    padding: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 2px deeppink, 0 0 5px rgba(0, 0, 0, 1),
      inset 0 0 5px rgba(0, 0, 0, 1);
    border-radius: 10px;
    z-index: 1;
    .modal-info {
      width: 100%;
      height: 100%;
      position: relative;
      background-color: white;
      z-index: 2;
      box-shadow: 0 0 2px deeppink, 0 0 5px rgba(0, 0, 0, 1),
        inset 0 0 5px rgba(0, 0, 0, 1);
      border-radius: 10px;
    }
  }
  .modal-content::before {
    content: "";
    position: absolute;
    top: -30%;
    left: -30%;
    width: 250%;
    height: 250%;
    background: repeating-linear-gradient(
      white 0%,
      white 7.5px,
      hotpink 7.5px,
      hotpink 15px,
      white 15px,
      white 22.5px,
      hotpink 22.5px,
      hotpink 30px
    );
    transform: translateX(-20%) translateY(-10%) rotate(-45deg);
    animation: animate 20s linear infinite;
  }
}
@keyframes animate {
  from {
    background-position: 0;
  }

  to {
    background-position: 0 450px;
  }
}
</style>
