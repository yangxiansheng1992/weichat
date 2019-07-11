<template>
  <mt-popup
    v-model="isShow"
    pop-transition="popup-fade"
    :style="popStyle"
    :closeOnClickModal="false"
  >
    <div class="modal-content" :style="style">
      <div class="close-icon" @click="hide">
        <font-awesome-icon icon="times" color="#000" />
      </div>
      <div class="modal-info">
        <header class="head" v-if="title.length">{{ title }}</header>
        <div class="menu-box" slot="content">
          <div class="link">
            <div
              class="item"
              v-for="link in lotteryLinks"
              :key="link.lottery_id"
              @click="
                toggleChatRoom(
                  link.lottery_id,
                  link.lottery_name,
                  link.lottery_code
                )
              "
            >
              <div class="chatroom-icon">
                <font-awesome-icon :icon="tab.icon" class="icon" />
              </div>
              <p class="text">{{ link.lottery_name }}</p>
            </div>
          </div>
        </div>
        <div class="link">
          <div
            class="item"
            @click="goPage(item.name)"
            v-for="item in pageLinks"
            :key="item.title"
          >
            <font-awesome-icon :icon="item.icon" class="page-icon" />
            <p class="text">{{ item.title }}</p>
          </div>
        </div>
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
      default: '#d64f44',
    },
    width: {
      type: [String, Number],
      default: '80%',
    },
    lotteryLinks: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data () {
    return {
      isShow: false,
      pageLinks: [
        {
          name: 'hall', title: '大厅', icon: 'home',
        },
        {
          name: 'me', title: '个人中心', icon: 'user',
        },
        {
          name: 'load', title: '刷新', icon: 'redo-alt',
        },
      ],
    };
  },
  computed: {
    style () {
      return { backgroundColor: this.color };
    },
    popStyle () {
      return { width: this.width };
    },
  },
  methods: {
    hide () {
      this.isShow = false;
      this.$emit('on-change', this.isShow);
    },
    show () {
      this.isShow = true;
      this.$emit('on-change', this.isShow);
    },
    goPage (name) {
      switch (name) {
        case 'load':
          this.refresh();
          break;
        default:
          this.$router.push({ name });
          break;
      }
      this.hide();
    },
    toggleChatRoom (lotteryId, lotteryName, lotteryCode) {
      this.$router.replace({
        name: 'chatroom',
        query: {
          lotteryId, lotteryName, lotteryCode,
        },
      });
      this.hide();
    },
    refresh () {
      window.location.reload();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
@import "@/styles/color.scss";
@import "@/styles/animate.scss";
@import "./popup-menu.scss";
</style>
