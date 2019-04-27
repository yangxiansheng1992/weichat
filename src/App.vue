<template>
  <div id="app">
    <div>
      <div
        v-if="isLogged"
        class="app-header"
      >
        <div class="title">
          微信
        </div>
        <router-link
          tag="div"
          class="search"
          to="/search"
        >
          <img
            src="./assets/images/icons/搜索.png"
            height="20"
            width="20"
          >
        </router-link>
        <div
          class="plus"
          @click="logClick"
        >
          <img
            src="./assets/images/icons/加号.png"
            height="20"
            width="20"
          >
        </div>
      </div>
        <router-view />
      <div
        v-if="isLogged"
        class="tab"
      >
        <router-link
          tag="div"
          class="tab-item"
          to="/chat"
        >
          <div class="tab-link tab-link-1">
            <span class="tab-link-text">微信</span>
          </div>
        </router-link>
        <router-link
          tag="div"
          class="tab-item"
          to="/address"
        >
          <div class="tab-link tab-link-2">
            <span class="tab-link-text">通讯录</span>
          </div>
        </router-link>
        <router-link
          tag="div"
          class="tab-item"
          to="/find"
        >
          <div class="tab-link tab-link-3">
            <span class="tab-link-text">发现</span>
          </div>
        </router-link>
        <router-link
          tag="div"
          class="tab-item"
          to="/me"
        >
          <div class="tab-link tab-link-4">
            <span class="tab-link-text">我</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations, mapState } from 'vuex';

export default {
  name: 'App',
  data(){
    return {
      isLogged:true,
    }
  },
  methods: {
    logClick() {
      console.log('打开选项')
    },
  },

};
</script>

<style>
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;

  }

  #app {
    height: 100%;
  }

  .app-header {
    background-color: #1e2b39;
    height: 50px;
    color: #fff;
    position: absolute;
    width: 100%;
  }

  .title {
    font-size: 18px;
    padding-top: 14px;
    padding-left: 14px;
  }

  .search img {
    position: absolute;
    top: 14px;
    right: 80px;
  }

  .plus img {
    position: absolute;
    top: 14px;
    right: 24px;
  }

  .tab {
    border-top: 1px solid rgba(153, 153, 153, 0.4);
    display: flex;
    position: fixed;
    height: 50px;
    line-height: 44px;
    font-size: 14px;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: #fff;
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
    background: url('./assets/images/tab/微信.png') no-repeat center 6px;
    background-size: 20px 20px;
  }

  .tab-link-2 {
    background: url('./assets/images/tab/通讯录.png') no-repeat center 6px;
    background-size: 20px 20px;
  }

  .tab-link-3 {
    background: url('./assets/images/tab/发现.png') no-repeat center 8px;
    background-size: 16px 16px;
  }

  .tab-link-4 {
    background: url('./assets/images/tab/我.png') no-repeat center 8px;
    background-size: 16px 16px;
  }

  .router-link-active .tab-link {
    color: #09BB07;
  }

  .router-link-active .tab-link-1 {
    background: url('./assets/images/tab/微信1.png') no-repeat center 6px;
    background-size: 20px 20px;
  }

  .router-link-active .tab-link-2 {
    background: url('./assets/images/tab/通讯录1.png') no-repeat center 6px;
    background-size: 20px 20px;
  }

  .router-link-active .tab-link-3 {
    background: url('./assets/images/tab/发现1.png') no-repeat center 8px;
    background-size: 16px 16px;
  }

  .router-link-active .tab-link-4 {
    background: url('./assets/images/tab/我1.png') no-repeat center 8px;
    background-size: 16px 16px;
  }

</style>
