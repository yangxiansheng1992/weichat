<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import RYtool from './rongcloud/ryTool';
export default {
  name: 'App',
  data () {
    return {
      isLogged: true,
    }
  },
  created () {
    // RYtool.rongCloudStart();
  },
  methods: {

  }
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
}
</style>
