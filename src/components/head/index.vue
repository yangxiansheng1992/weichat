<template>
  <div class="app-header">
    <div class="title">
      微信
    </div>
    <router-link tag="div" class="search" to="/search">
      <img src="../../assets/images/icons/搜索.png" height="20" width="20" />
    </router-link>
    <div class="plus" @click="logClick">
      <img src="../../assets/images/icons/加号.png" height="20" width="20" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logClick () {

    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>

