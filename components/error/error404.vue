<template>
<div>

  <lottie :options="defaultOptions"  />
</div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '/assets/js/animation/anim-error-404.json';

export default {
  head(){
    return {
      title: '404'
    }
  },
  name: "error404",
  components: {Lottie },
  data () {
    return {
      defaultOptions: {animationData: animationData.default},
    }
  },
}
</script>

