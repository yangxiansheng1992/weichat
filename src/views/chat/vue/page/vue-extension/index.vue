<template>
  <div class="vue-basis">
    <div class="a">
      <solt-a>
        <template slot="head">
          <h1>我是头部</h1>
        </template>
        <div class="ma">
          <p>我是中间内容1.</p>
          <p>我是中间内容2</p>
        </div>

        <template v-slot:footer>
          <p>我是底部</p>
        </template>
      </solt-a>
    </div>
    <div class="b">
      <solt-b>
        <div slot-scope="scope">
          <p>{{ scope.usertext }}</p>
          <p>{{ usertext.Name }}</p>
          <p>{{ scope.test }}</p>
        </div>
      </solt-b>
    </div>
  </div>
</template>
<script>
import SoltA from './components/soltA';
import SoltB from './components/soltB';
export default {
  components: {
    SoltA,
    SoltB,
  },
  data () {
    return {
      usertext: { Name: 'yang' },
      userage: { Age: 18 },
    }
  }
}
</script>