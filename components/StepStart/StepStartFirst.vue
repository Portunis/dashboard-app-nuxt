<template>
<div>
 <div class="animate">
   <lottie :options="defaultOptions"  />
 </div>
  <div class="text">
    <p>Привет мой друг, добро пожаловать в нашу систему. </p>
    <p>Я проведу тебе экскурсию по нашей административной панеле, но сначала расскажу немного о нас</p>
    <div class="btn">
      <button @click="$emit('nextpage')">Начать путь</button>
    </div>
  </div>
</div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '/assets/js/animation/StepAnim/72259-team.json';
export default {
  name: "error404",
  components: {Lottie },
  data () {
    return {
      defaultOptions: {animationData: animationData.default},
    }
  },
}
</script>


<style lang="scss" scoped>
.animate{
  max-width: 800px;
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
