<template>
  <div class="vue-basis">
    <blackboard :data="basisData" />
  </div>
</template>
<script>
import Blackboard from '../../../components/blackboard/index';
export default {
  components: {
    Blackboard,
  },
  data () {
    return {
      basisData: {
        title: '',
        content: '',
      },
    }
  }
}
</script>
<style lang="scss">
</style>
