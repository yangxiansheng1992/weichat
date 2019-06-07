<template>
  <transition name="slide">
    <div class="userinfo">
      <me-head title="个人中心" />
      <ul class="detail">
        <li>
          <p>头像</p>
          <p>
            <img :src="imgStr ? imgStr : userInfo.avatar" alt="" />
            <input
              type="file"
              name="image"
              accept="image/*"
              @change="onchangeImgFun"
              class="image-file"
            />
          </p>
        </li>
        <li>
          <p>用户名</p>
          <p>{{ userInfo.user_id }}</p>
        </li>
        <li>
          <p>余额</p>
          <p>{{ userBalance.total_amount || 0 }}</p>
        </li>
        <li>
          <p>彩票返点</p>
          <p>{{ userInfo.frozen_amount || 0 }}</p>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
import MeHead from '@/components/head';
import Popup from '@/components/popup';
import UserStorage from '@/storage/user';
import { mapState } from 'vuex';
import { showToast } from '@/service/helper';
import Api from '../../../service/api';

export default {
  name: 'userinfo',
  components: {
    MeHead,
    Popup,
  },
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      isClear: true,
      imgStr: '',
    };
  },
  computed: {
    ...mapState({
      userBalance: state => state.userBalance,
    }),
    userInfo: () => UserStorage.getUserInfo(),
  },
  methods: {
    onchangeImgFun (e) {
      const file = e.target.files[0];
      const imgSize = file.size;
      if (imgSize <= 50 * 1024) {
        this.imgStr = window.URL.createObjectURL(e.target.files[0]);
        // console.log(window.URL.createObjectURL(e.target.files[0]));
        // this.setUserAvatar(this.imgStr);
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //   const dataURL = reader.result;
        //   this.imgStr = dataURL;
        //   this.setUserAvatar(this.imgStr);
        // };
      } else {
        showToast('图片超出50kb限制范围');
      }
    },
    setUserAvatar (avatar) {
      Api.setUserAvatar(avatar)
        .then(({ status, result, error }) => {
          console.log(result);
          if (!status) {
            showToast(error);
          }
          showToast(result);
        })
        .catch((err) => {
          showToast(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/compass.scss";
@import "@/styles/color.scss";
@import "./index.scss";
</style>
