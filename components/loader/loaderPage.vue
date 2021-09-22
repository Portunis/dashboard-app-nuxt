<template>
  <lottie  :options="defaultOptions"   />
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '/assets/js/animation/anim-loader-page.json';

export default {
  name: "loaderPage",
  components: {Lottie},
  data () {
    return {
      defaultOptions: {animationData: animationData.default},
    }
  },
}
</script>

<style scoped>

</style>
