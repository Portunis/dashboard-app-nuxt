<template>
  <div class="loaderBeer">
    <lottie  :options="defaultOptions"  />
  </div>

</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue';
import * as animationData from '/assets/js/animation/BeerOrDenis/beer-loader.json';

export default {
  name: "loaderBeer",
  components: {Lottie },
  data () {
    return {
      defaultOptions: {animationData: animationData.default},
    }
  },
}
</script>

<style scoped>
.loaderBeer{
  height: 300px;
  width: 300px;
  margin-top: -150px;
  margin-left: -150px;
  left: 50%;
  top: 50%;
  position: absolute;
}
</style>
