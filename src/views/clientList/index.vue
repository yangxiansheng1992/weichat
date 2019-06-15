<template>
  <div class="clientList">
    <mt-index-list>
      <mt-index-section :index="item.type" v-for="(item,index) in friendList" :key="index">
        <mt-cell :title="list.name" v-for="list in item.user" :key="list.id"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import mockApi from '@/mockService/mockApi';
import {showToast} from '../../config/helper';

export default {
  name: 'clientList',
  data(){
    return {
      friendList:'',
    }
  },
  created(){
 this.getFriendList();
  },
 methods:{
      getFriendList () {
      mockApi.getFriendList()
        .then(({ data, status }) => {
          if (!status) {
            showToast('呀，出错啦！');
          }
          console.log(data.list)
          this.friendList = [...data.list];
        })
        .catch((err) => {
          // console.log(err);
          // showToast(err);
        });
    },
}
}
</script>


<style lang="scss" scoped>
.clientList {
  // padding: 50px 0 0;
}
</style>
