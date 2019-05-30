<template>
  <div id="app">
    <div>
      <Head />
      <router-view />
      <tab-list />
    </div>
  </div>
</template>

<script>
import TabList from './components/tab/index';
import Head from './components/head/index';

export default {
  name: 'App',
  components: {
    TabList,
    Head
  },
  data () {
    return {
      isLogged: true,
    }
  },
  methods: {
    logClick () {
      console.log('打开选项')
    },
  },

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
