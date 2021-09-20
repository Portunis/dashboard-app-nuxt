<template>
  <div>
    <div class="cards">
      <div class="body-card animate__animated animate__bounceIn">
        <div class="card-content">
          <div class="card-title">Большой заголовок</div>
          <div class="card-text">
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          </div>
          <div class="body-img"><img class="card-img animate__animated animate__pulse animate__infinite"
                                     src="@/assets/images/svg/cards/cards-manager.svg" alt="cards-manager"/></div>
          <div class="button-body">
            <button class="right">Перейти</button>
          </div>
        </div>
      </div>
    <SliderCard />
    </div>
  </div>
</template>

<script>

import SliderCard from "~/components/Dashboard/Sliders/SliderCard";
export default {
  components: {SliderCard},
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
      _seo: [
        {hid: 'description', name: 'description', content: 'popular'}, //(из документации)Чтобы избежать дублирования при использовании в дочерних компонентах, укажите уникальный идентификатор с  hid ключом к метаописанию. Таким образом vue-metaбудет известно, что он должен перезаписать тег по умолчанию.
        {name: 'test2', content: 'popular2'},
        {name: 'test4', content: 'popular3'},
        {name: 'test4', content: 'popular3'},


      ],

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
@import "assets/scss/style";

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

}

.body-card {
  width: auto;
  height: 300px;
  border-radius: 10px;
  background: #7d6aa5;
  margin: 10px;
  opacity: 0.5;
  position: relative;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }

}

.body-card:first-child {
  width: 1000px;
  height: 300px;
  border-radius: 10px;
  background: #7d6aa5;
  margin: 10px;
  opacity: 0.5;
  position: relative;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }

}

.body-img {
  margin: 0 0 0 20px;
}

.card-img {
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: auto;
  margin: 0;
}

.card-title {
  font-size: 32px;
  color: #fff;
  font-family: sans-serif;
  text-transform: uppercase;
  margin: 25px 10px;
}

.card-text {
  font-size: 14px;
  color: #fff;
  font-family: sans-serif;
  text-transform: uppercase;
  margin: 25px 20px;
  max-width: 600px;
  word-wrap: break-word;
  max-height: 200px;
}

.button-body {
  position: relative;

  button {
    padding: 10px 10px;
    background: #f9c358;
    border: none;
    border-radius: 5px;
    width: 100px;
    margin: 50px 30px;
    color: #fff;
    font-size: 14px;
    font-family: sans-serif;
    cursor: pointer;


  }
  .right {
    position: relative;
  }
  .right:hover:before {
    width: 100%;
  }
  .right:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 42px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    transition: all 1s ease;
  }

}


</style>

