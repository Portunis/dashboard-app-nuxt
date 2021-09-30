<template>
  <div class="loaderBeer">
    <a href="#">
      <lottie  :options="defaultOptions"  />
    </a>

  </div>

</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue';
import * as animationData from '/assets/js/animation/BeerOrDenis/beer-url.json';

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
.loaderBeer {
  height: 300px;
  width: 300px;
  cursor: pointer;
}
</style>
