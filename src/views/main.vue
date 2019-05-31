<template>
  <div class="box">
    <Head />
    <main>
      <router-view />
    </main>
    <tab-list />
  </div>
</template>

<script>
import TabList from '../components/tab/index';
import Head from '../components/head/index';

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
      console.log('打开选项');
    },
  },

};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    width: 100%;
    overflow: auto;
  }
}
</style>
