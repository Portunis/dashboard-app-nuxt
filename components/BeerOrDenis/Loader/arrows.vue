<template>
  <div class="loaderBeer">
    <lottie  :options="defaultOptions"  />
  </div>

</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue';
import * as animationData from '/assets/js/animation/BeerOrDenis/beer-arrow.json';

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
  transform: rotate(90deg);
}
</style>
