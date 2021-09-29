<template>

  <div class="body-notificate">
    <div class="animate">
      <lottie :options="defaultOptions"/>
    </div>
    <div class="context_helper">
      <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
        используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное
        распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь
        ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в
        качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много
        веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много
        версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</p>

      <p>
        Где его взять?
        Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например,
        юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для
        серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие
        известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут
        нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он
        использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате
        сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.
      </p>
    </div>
    <div class="btn">
      <button @click="$emit('nexthelp')">Продолжить</button>
    </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '/assets/js/animation/helper/52995-emergency-helpline.json';

export default {
  components: {Lottie},
  data() {
    return {
      defaultOptions: {animationData: animationData.default},
    }
  },
}
</script>

<style lang="scss" scoped>
.btn{
  margin: 20px 0;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  button{
    background: #f9c358;
    border-radius: 5px;
    width: 200px;
    padding: 10px 10px;
    border: none;
    color: #fff;
    cursor: pointer;

  }
}
.context_helper {

}

.animate {
  max-width: 200px;
  margin: 10px auto;
}

.body-notificate {
  width: 1400px;
  min-height: 500px;
  border-radius: 10px;
  background: #7d6aa5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 999999999999;

  p {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    margin: 10px 20px;
  }
}

</style>
