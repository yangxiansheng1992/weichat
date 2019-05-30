<template>
  <transition name="slide">
    <section class="register">
      <mt-header fixed class="header">
        <router-link slot="left" to="/">
          <mt-button class="back-btn" icon="back">取消</mt-button>
        </router-link>
      </mt-header>
      <div class="blank" />
      <div class="content">
        <div class="inputs">
          <mt-field
            v-model="username.value"
            :state="username.state"
            :attr="{ maxlength: 20 }"
            @blur.native.capture="validation"
            class="important"
            label="用户名"
            placeholder="请填写帐号"
          />
          <mt-field
            v-model="password.value"
            :state="password.state"
            type="password"
            class="important"
            label="登录密码"
            :attr="{ maxlength: 20 }"
            @blur.native.capture="validation"
            placeholder="6-20个英文字母或数字"
          />
          <mt-field
            v-model="password_confirm.value"
            :state="password_confirm.state"
            type="password"
            class="important"
            label="确认密码"
            :attr="{ maxlength: 20 }"
            @blur.native.capture="validation"
            placeholder="6-20个英文字母或数字"
          />
          <mt-field
            v-model="mobile.value"
            :state="mobile.state"
            :attr="{ maxlength: 11 }"
            @blur.native.capture="validation"
            type="tel"
            class="important"
            label=" 手机号码"
            placeholder="请填入常用手机号码"
          />
          <mt-field
            v-model="userup_number.value"
            :state="userup_number.state"
            label=" 邀请码"
            placeholder="没有可不填"
          />
        </div>
        <div class="container">
          <mt-button class="login-btn" type="default" @click="register"
            >注册</mt-button
          >
        </div>
        <div class="footer">
          <a class="hint" @click="redirect('/login')">已经有帐号？立即登入</a>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      username: { value: '', state: '' },
      password: { value: '', state: '' },
      password_confirm: { value: '', state: '' },
      mobile: { value: '', state: '' },
      userup_number: { value: '', state: '' },
    };
  },
  methods: {
    redirect (path) {
      this.$router.push(path);
    },
    validation () {
      try {
        if (/^[a-zA-Z0-9]{4,10}$/.test(this.username.value)) {
          this.username.state = 'success';
        } else {
          this.username.state = 'error';
          throw new Error('用户名為4-20个英文字母或数字');
        }

        if (/^[a-zA-Z0-9]{6,10}$/.test(this.password.value)) {
          this.password.state = 'success';
        } else {
          this.password.state = 'error';
          throw new Error('密码為6-20个英文字母或数字');
        }

        if (this.password_confirm.value === this.password.value) {
          this.password_confirm.state = 'success';
        } else {
          this.password_confirm.state = 'error';
          throw new Error('确认密码错误');
        }

        if (/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.mobile.value)) {
          this.mobile.state = 'success';
        } else {
          this.mobile.state = 'error';
          throw new Error('手机号码不正确');
        }
        return true;
      } catch (e) {
        return false;
      }
    },
    register () {
    },
  },
};
</script>

<style scoped lang="scss">
.register {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;

  .header {
    background-color: transparent;

    .back-btn {
      color: #0bb607;
    }
  }

  .blank {
    height: 40px;
  }

  .content {
    text-align: center;
    margin-top: 1rem;

    .inputs {
      display: inline-block;
      text-align: left;
      width: 90%;
    }

    .container {
      text-align: center;

      .login-btn {
        margin-top: 2rem;
        background-color: #0bb607;
        color: white;
        width: 90%;
      }
    }
  }

  .important {
    display: inline-block;
    width: 100%;

    &::before {
      position: absolute;
      content: "*";
      top: 20px;
      left: 0;
      color: red;
    }
  }

  .footer {
    display: inline-block;
    text-align: center;
    width: 100%;

    .hint {
      width: 90%;
      margin-top: 2rem;
      font-size: 12px;
      color: #5f5f5f;
      text-align: left;
      display: inline-block;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
<style>
/*複寫讀取mask的z-index*/
.mint-indicator-wrapper {
  z-index: 2;
}

.mint-indicator-mask {
  z-index: 2;
}
</style>
