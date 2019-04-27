<template>
  <section>
    <div class="welcome" :style='welcomeStyle'>
      <footer class="footer">
        <router-link class="wrapper" to="/login">
          <mt-button
            class="login-btn"
            type="default">登入
          </mt-button>
        </router-link>
        <router-link class="wrapper" to="/register">
          <mt-button
            class="register-btn"
            type="default">注册
          </mt-button>
        </router-link>
      </footer>
    </div>
     <router-view/>
  </section>
</template>

<script>
export default {
  data(){
    return{
      welcomeStyle:{
        backgroundImage: 'url(' + require("../../assets/images/welcome.png")+')',
        backgroundRepeat:'noRepeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'absolute',
      },
    }
  }
};
</script>

<style scoped lang="scss">
  .welcome {
    display: flex;
    width: 100%;
    height: 100%;

    .footer {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-self: flex-end;

      .wrapper {
        flex: 1;
        text-decoration: none;

        .login-btn {
          justify-content: center;
          display: flex;
          width: 100px;
          align-self: flex-start;
          background-color: #19A318;
          color: white;
          margin: 1rem 2rem;
        }

        .register-btn {
          display: flex;
          width: 100px;
          margin: 1rem 2rem 1rem auto;
          align-self: flex-end;
          justify-content: center;
        }
      }
    }
  }

</style>
