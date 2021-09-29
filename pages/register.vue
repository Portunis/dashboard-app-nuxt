<template>
  <div>
    <div class="body-auth" >
      <div class="form-auth">
        <h1>Авторизация</h1>
        <form>
          <div class="input-auth">

            <div class="form-container sign-in-container">
              <form action="#">
                <h1>Регистрация</h1>
                <input type="text" placeholder="ФИО" />
                <div class="error_body">
                  <span class="error_input">Введите верный формат фио</span>
                </div>
                <input type="email" placeholder="Email" />
                <div class="error_body">
                  <span class="error_input">Введите верный формат email</span>
                </div>
                <input type="password" placeholder="Пароль" />
                <div class="error_body">
                  <span class="error_input">Введите верный формат пароль</span>
                </div>
                <button @click.prevent="notificationSub" :class="{active: checkAuth}"><i><LoaderCircle class="button-loader" v-if="checkAuth" /></i><p v-if="!checkAuth">Регистрация</p></button>
                <NuxtLink class="register_url" to="/auth" >У меня есть аккаунт</NuxtLink>
              </form>

            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="image-auth">
                  <!--                <img src="@/assets/images/svg/auth/auth-bg.svg"  alt="auth-bg"/>-->
                  <LoaderAuth />
                </div>
              </div>
            </div>
          </div>
          <div class="button-auth">
            <button @click.prevent="notificationSub">Войти</button>
            <button>Регистрация</button>
          </div>

        </form>

      </div>
    </div>
    <transition name="fade">
      <Succes class="notificate" v-if="notification"  />
    </transition>
  </div>

</template>

<script>
import Succes from "~/components/Dashboard/sendnotificate/succes";

import LoaderAuth from "~/components/loader/loaderAuth";
import LoaderCircle from "~/components/loader/loaderCircle";
export default {
  head() {
    return {
      title: 'Регистрация',

    }
  },
  name: "auth",
  components: {LoaderCircle, LoaderAuth, Succes },
  layout: 'auth',
  data () {
    return {
      notification: false,
      checkAuth: false,

    }
  },
  methods: {

    notificationSub () {
      this.checkAuth = true;
      setTimeout(() => {
        this.notification = false;
        this.$router.push({name: "dashboard"})
      }, 3000);

    }
  },
}
</script>

<style lang="scss" scoped>
//////
.register_url{
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  cursor: pointer;
}
.error_body{
  position: relative;
  width: auto;

}
.error_input{
  text-align: left;
  color: red;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
}
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
.image-auth{
  width: 798px;
  height: 500px;
  position: absolute;
  top: 24%;
  right: 71px;
}
.button-loader{
  max-width: 50px;
}

* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0 0 40px 0 !important;
  font-family: 'Open Sans', sans-serif;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 30px 0 15px 0;
}
button.active{

  padding: 1px 39px !important;

}
button {
  font-family: 'Open Sans', sans-serif;
  border-radius: 20px;
  border: 1px solid #7d6aa5;
  background-color: #7d6aa5;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 800;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  margin: 30px;

  p{
    font-family: 'Open Sans', sans-serif;


    color: #FFFFFF;
    font-size: 12px;
    font-weight: 800;

    letter-spacing: 1px;
    text-transform: uppercase;


  }
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  font-family: 'Open Sans', sans-serif;
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 50%;
  outline: none;
}
input[type~="text"], input[type~="password"],input[type~="email"]{
  font-family: 'Open Sans', sans-serif;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25),
  0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container{
  transform: translateX(-100%);
}

.overlay {
  background: #7d6aa5;
  background: -webkit-linear-gradient(to right, #FF4B2B, #7d6aa5);
  background: linear-gradient(to right, #FF4B2B, #7d6aa5);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}

/////


@import "assets/scss/style";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>
