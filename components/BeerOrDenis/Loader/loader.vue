<template>
  <div class="loaderBeer">
    <lottie :options="defaultOptions"/>
  </div>

</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue';
import * as animationData from '/assets/js/animation/11045-buildin-a-web-page.json';

export default {
  name: "loaderBeer",
  components: {Lottie},
  data() {
    return {
      defaultOptions: {animationData: animationData.default},
    }
  },
}
</script>

<style lang="scss">
.loaderBeer {
  height: auto;
  width: 1000px;
  margin: 0 auto;




}
@media (min-width: 320px) {
  .loaderBeer {
    width: 320px;

  }
}
@media (min-width: 375px) {
  .loaderBeer {
    width: 375px;

  }
}
@media (min-width: 414px) {
  .loaderBeer {
    width: 414px;

  }
}
@media (min-width: 768px) {
  .loaderBeer {
    width: 768px;

  }
}
</style>
