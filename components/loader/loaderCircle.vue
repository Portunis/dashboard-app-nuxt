<template>
<div>
  <lottie :options="defaultOptions"  />
</div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '/assets/js/animation/anim-loader-circle.json';

export default {
  name: "loaderCircle",
  components: {Lottie },
  data () {
    return {
      defaultOptions: {animationData: animationData.default},
    }
  },
}
</script>

<style scoped>

</style>
