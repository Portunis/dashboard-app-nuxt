<template>
  <div class="animate tooltip">
    <lottie :options="defaultOptions"/>

    <span class="tooltiptext tooltip-left">Нажми на меня, если тебе нужна помощь</span>

  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '/assets/js/animation/helper/58143-gradient-loader-02.json';

export default {
  components: {Lottie},
  data() {
    return {
      defaultOptions: {animationData: animationData.default},
    }
  },
}
</script>

<style scoped>
.animate {
  max-width: 100px;
}

.tooltip {
  position: relative;
  display: inline-block;

}

.tooltip
.tooltiptext {
  visibility: hidden;
  position: absolute;
  width: 200px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
}

/* Отображение текста подсказки при наведении курсора мыши на контейнер подсказки */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltip-left {
  top: 15px;
  bottom: auto;
  right: 128%;
}
</style>
