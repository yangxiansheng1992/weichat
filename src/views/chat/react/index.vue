<template>
  <div class="react">
    <Head :title="userData.title" :isSearchShow="isSearchShow"></Head>
    <main></main>
  </div>
</template>
<script>
import Head from '@/components/head';
import Scroll from '@/components/scroll';

export default {
  name: 'chatroom',
  components: {
    Head,
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    }
  },
  data () {
    return {
      isSearchShow: false,
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
