<template>
  <div class="vue">
    <me-head />
    <main>
      <router-view />
    </main>
    <vue-tab />
  </div>
</template>
<script>
import MeHead from '../components/head/index';
import VueTab from '../components/vue-tab/index'


export default {
  name: 'chatroom',
  components: {
    MeHead,
    VueTab,
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    }
  },
  data () {
    return {
      isSearchShow: false
    }
  },

  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
