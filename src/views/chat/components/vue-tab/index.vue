<template>
  <div class="tab">
    <div
      class="tab-item"
      :class="{ active: $route.path === tab.name }"
      v-for="tab in tabList"
      :key="tab.name"
      @click="doLink(tab.name)"
    >
      <div class="tab-inner">
        <font-awesome-icon :icon="tab.icon" class="icon" />
        <span>{{ tab.title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabList: [
        {
          title: 'vue基础',
          name: "/vue-basis",
          icon: 'book-open',
        },
        {
          title: 'vue扩展',
          name: "/vue-extension",
          icon: 'book-reader',
        },
        {
          title: 'UI库',
          name: "/vue-ui",
          icon: 'cubes',
        },
        {
          title: '小功能',
          name: "/vue-functional",
          icon: 'award',
        },
      ]
    }
  },
  methods: {
    doLink (name) {
      this.$router.push(name);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
@import "@/styles/color.scss";
$color: #afb4db;
.tab {
  border-top: 1px solid rgba(153, 153, 153, 0.4);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: px2rem(50px);
  line-height: 44px;
  font-size: 14px;
  position: fixed;
  bottom: 0px;
  left: 0;
  background: $color;
  background: -moz-linear-gradient(top, $color, rgba(34, 17, 87, 1));
  background: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from($color),
    to(rgba(34, 17, 87, 1))
  );
  background: -o-linear-gradient(top, $color, rgba(34, 17, 87, 1));
}

.tab-item {
  flex: 1;
  text-align: center;
  color: white;
}
.tab-item.active {
  color: #bed742;
}

.tab-inner {
  position: relative;
  height: 50px;
  text-align: center;
}
.tab-inner .icon {
  position: absolute;
  top: px2rem(5px);
  left: 50%;
  transform: translate(-50%, 0);
  font-size: px2rem(20px);
}

.tab-inner span {
  position: absolute;
  font-size: 14px;
  line-height: 14px;
  height: 14px;
  width: 100%;
  bottom: 6px;
  left: 0px;
}
</style>
