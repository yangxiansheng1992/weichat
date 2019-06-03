<template>
  <div class="tab">
    <!-- <router-link tag="div" class="tab-item" to="/chat">
      <div class="tab-link tab-link-1" @click="setTitle">
        <span class="tab-link-text">微信</span>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/clientList">
      <div class="tab-link tab-link-2">
        <span class="tab-link-text">通讯录</span>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/find">
      <div class="tab-link tab-link-3">
        <span class="tab-link-text">发现</span>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/me">
      <div class="tab-link tab-link-4">
        <span class="tab-link-text">我</span>
      </div>
    </router-link> -->

    <router-link
      v-for="item in tabList"
      tag="div"
      class="tab-item"
      :key="item.title"
      :routerLinkActive="item.linkClass"
      :to="item.name"
    >
      <div class="tab-link" :class="item.linkClass" @click="setTitle(item)">
        <span class="tab-link-text">我</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabList: [
        {
          title: '微信',
          name: "/chat",
          linkClass: 'tab-link-1',
          iconType: 'plus',
          bgColor: '#1e2b39',
          iconColor: '#fffffb',
        },
        {
          title: '通讯录',
          name: "/clientList",
          linkClass: 'tab-link-2',
          iconType: 'plus',
          bgColor: '#1e2b39',
          iconColor: '#fffffb',
        },
        {
          title: '发现',
          name: "/find",
          linkClass: 'tab-link-3',
          iconType: 'plus',
          bgColor: '#1e2b39',
          iconColor: '#fffffb',
        },
        {
          title: '我',
          name: "/me",
          linkClass: 'tab-link-4',
          iconType: 'camera',
          bgColor: '#fffffb',
          iconColor: '#1e2b39',
        },
      ]
    }
  },
  methods: {
    setTitle (data) {
      this.$parent.$data.title = data.title;
      this.$parent.$data.iconType = data.iconType;
      this.$parent.$data.bgColor = data.bgColor;
      this.$parent.$data.iconColor = data.iconColor;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/compass.scss";
@import "../../styles/color.scss";
.tab {
  border-top: 1px solid rgba(153, 153, 153, 0.4);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: px2rem(50px);
  line-height: 44px;
  font-size: 14px;
  background-color: $white;
  position: fixed;
  bottom: 0px;
  left: 0;
}

.tab-item {
  flex: 1;
  text-align: center;
}

.tab-link {
  position: relative;
  color: #999999;
  height: 50px;
}

.tab-link span {
  position: absolute;
  font-size: 14px;
  line-height: 14px;
  height: 14px;
  width: 100%;
  bottom: 6px;
  left: 0px;
}

.tab-link-1 {
  background: url("../../assets/images/tab/微信.png") no-repeat center 6px;
  background-size: 20px 20px;
}

.tab-link-2 {
  background: url("../../assets/images/tab/通讯录.png") no-repeat center 6px;
  background-size: 20px 20px;
}

.tab-link-3 {
  background: url("../../assets/images/tab/发现.png") no-repeat center 8px;
  background-size: 16px 16px;
}

.tab-link-4 {
  background: url("../../assets/images/tab/我.png") no-repeat center 8px;
  background-size: 16px 16px;
}

.router-link-active .tab-link {
  color: #09bb07;
}

.router-link-active .tab-link-1 {
  background: url("../../assets/images/tab/微信1.png") no-repeat center 6px;
  background-size: 20px 20px;
}

.router-link-active .tab-link-2 {
  background: url("../../assets/images/tab/通讯录1.png") no-repeat center 6px;
  background-size: 20px 20px;
}

.router-link-active .tab-link-3 {
  background: url("../../assets/images/tab/发现1.png") no-repeat center 8px;
  background-size: 16px 16px;
}

.router-link-active .tab-link-4 {
  background: url("../../assets/images/tab/我1.png") no-repeat center 8px;
  background-size: 16px 16px;
}
</style>
