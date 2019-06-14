<template>
  <Popup color="#d64f44" ref="popup" width="90%">
    <div class="left-menu" slot="content">
      <div class="chatroom-link">
        <div
          class="item"
          v-for="link in animateList"
          :key="link.type"
          @click="setAnimation(link.type)"
        >
          <div class="icon">
            <img
              :src="
                require(`../../../../assets/images/home/icon_${link.type}.png`)
              "
            />
          </div>
          <p class="text">{{ link.name }}</p>
        </div>
      </div>
    </div>
  </Popup>
</template>
<script>
import Popup from "@/components/popup";

export default {
  components: { Popup },
  props: {
    animateList: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data () {
    return {
      isShow: false,
    };
  },
  methods: {
    setAnimation (type) {
      this.$parent.$data.animateType = type
      this.hide();
    },
    show () {
      this.$refs.popup.show();
    },
    hide () {
      this.$refs.popup.hide();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
@import "@/styles/color.scss";
@import "./index.scss";
</style>
