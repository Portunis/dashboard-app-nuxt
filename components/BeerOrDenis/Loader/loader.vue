<template>
  <div class="loaderBeer">
    <lottie  :options="defaultOptions"  />
  </div>

</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue';
import * as animationData from '/assets/js/animation/11045-buildin-a-web-page.json';

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
  height: auto;
  width: 1000px;

  margin: 0 auto;
}
</style>
