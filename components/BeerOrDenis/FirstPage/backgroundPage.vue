<template>
  <div class="loaderBeer">
    <lottie  :options="defaultOptions"  />
  </div>

</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue';
import * as animationData from '/assets/js/animation/BeerOrDenis/background.json';

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
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
z-index: 0;
}
</style>
