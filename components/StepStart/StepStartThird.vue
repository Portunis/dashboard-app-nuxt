<template>
  <div>
    <div class="circle_left"></div>
    <div class="circle_right"></div>
    <div class="circle_center"></div>
    <div class="circle_center-right"></div>
    <div class="circle_center-bottom"></div>
    <div class="body_animate">
      <div class="animate">
        <lottie :options="defaultOptions"  />
      </div>
      <div class="text">
        <p>Ваши знания дороги для нас</p>
        <p>Мы ценим всех сотрудников и стараемся поощрять их как можно чаще</p>
        <div class="btn">
          <button @click="$emit('nextpage')">Продолжить</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '/assets/js/animation/StepAnim/39998-web-development.json';
export default {
  name: "error404",
  head(){
    return{
      title: 'Знакомство'
    }
  },
  components: {Lottie },
  data () {
    return {
      defaultOptions: {animationData: animationData.default},
    }
  },
}
</script>


<style lang="scss" scoped>
.circle_center-bottom{
  bottom: 48px;
  right: 410px;
  position: absolute;
  width: 140px;
  height: 140px;
  background:  #fff;
  -moz-border-radius: 70px;
  -webkit-border-radius: 70px;
  border-radius: 70px;
  filter: blur(1.5rem);
  opacity: 0.5;
}
.circle_center-right{
  top: 48px;
  left: 960px;
  position: absolute;
  width: 140px;
  height: 140px;
  background:  #fff;
  -moz-border-radius: 70px;
  -webkit-border-radius: 70px;
  border-radius: 70px;
  filter: blur(1.5rem);
  opacity: 0.5;
}
.circle_center{
  top: 500px;
  left: 300px;
  position: absolute;
  width: 140px;
  height: 140px;
  background:  #f9c358;
  -moz-border-radius: 70px;
  -webkit-border-radius: 70px;
  border-radius: 70px;
  filter: blur(1.5rem);
  opacity: 0.5;
}
.circle_left{
  top: -20px;
  left: -25px;
  position: absolute;
  width: 240px;
  height: 240px;
  background:  #7d6aa5;
  -moz-border-radius: 70px;
  -webkit-border-radius: 70px;
  border-radius: 120px;
  filter: blur(1.5rem);
  opacity: 0.5;
}
.circle_right{
  top: 175px;
  right: 85px;
  position: absolute;
  width: 140px;
  height: 140px;
  background:  #7d6aa5;
  -moz-border-radius: 70px;
  -webkit-border-radius: 70px;
  border-radius: 70px;
  filter: blur(1.5rem);
  opacity: 0.5;
}
.body_animate{
  margin: 130px auto;
}
.animate{
  max-width: 500px;
  margin: 0 auto;
}
.text{
  p{
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: white;
    font-family: 'Open Sans', sans-serif;

  }
}
.btn{
  margin: 20px 0;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  button{
    background: #7d6aa5;
    border-radius: 5px;
    width: 200px;
    padding: 10px 10px;
    border: none;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 0 0 0 rgba(#4e4066, .5);
    -webkit-animation: pulse 1.5s infinite;
  }
}

@-webkit-keyframes pulse {
  0% {
  }
  70% {

    box-shadow: 0 0 0 15px rgba(#4e4066, 0);
  }
  100% {

    box-shadow: 0 0 0 0 rgba(#4e4066, 0);
  }
}

</style>
