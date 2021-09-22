<template>

    <div class="cards">
      <div class="body-card animate__animated animate__bounceIn">
        <div class="card-content">
          <div class="card-title">Большой заголовок</div>
          <div class="card-text">
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          </div>
          <div class="body-img"><img class="card-img"
                                     src="@/assets/images/svg/cards/cards-manager.svg" alt="cards-manager"/></div>
          <div class="button-body">
            <button class="right" @click="notificationSub">Перейти</button>
          </div>
        </div>
      </div>
      <SliderCard/>
      <CircleChart  />
      <transition name="fade">
      <Succes class="notificate" v-if="notification"  />
      </transition>
    </div>

</template>

<script>

import SliderCard from "~/components/Dashboard/Sliders/SliderCard";
import CircleChart from "~/components/Dashboard/charts/circle/circleChart";
import Succes from "~/components/Dashboard/sendnotificate/succes";

export default {
  components: {Succes, CircleChart, SliderCard},
  head() {
    return {
      title: 'Главная',
      meta: [
        ...this.meta
      ]
    }
  },
  name: "index",
  layout: 'dashboard',


  data() {
    return {
      notification: false,
      _seo: [
        {hid: 'description', name: 'description', content: 'popular'}, //(из документации)Чтобы избежать дублирования при использовании в дочерних компонентах, укажите уникальный идентификатор с  hid ключом к метаописанию. Таким образом vue-metaбудет известно, что он должен перезаписать тег по умолчанию.
        {name: 'test2', content: 'popular2'},
        {name: 'test4', content: 'popular3'},
        {name: 'test4', content: 'popular3'},


      ],

    }
  },
  methods: {
    notificationSub () {
      this.notification = true;
      setTimeout(() => {
        this.notification = false;

      }, 3000);

    }
  },
  computed: {
    meta() {
      return this.$data._seo
    }


  },


}
</script>
<style lang="scss">
@import "assets/scss/cards/style";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

