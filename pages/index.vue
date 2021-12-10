<template>
  <div>
    <div class="title">
      <h2 class="title__h2">
        Hi, you have visited my site. Now it is in development, I am actively engaged in it in order to give you the
        opportunity to get acquainted with my work and learn more about me</h2>

    </div>
    <LoaderBeer/>
  <div class="footer">
    <p class="footer__p">Contacts:</p>
    <ul class="footer-contact">
      <li class="footer-contact__li">Telegram: 8-952-897-90-88</li>
      <li class="footer-contact__li">Email: portunisone@gmail.com</li>
    </ul>
  </div>

  </div>
</template>

<script>
import LoaderBeer from "~/components/BeerOrDenis/Loader/loader";
import FirstPage from "~/components/BeerOrDenis/FirstPage/FirstPage";

export default {
  head() {
    return {
      title: 'Portunis',
      meta: [
        ...this.meta
      ]
    }
  },
  name: "index",
  components: {LoaderBeer, FirstPage},
  layout: 'default',
  data() {
    return {
      loader: true,
      _seo: [
        {hid: 'description', name: 'description', content: 'Моя личная страница Portunis.pw'}, //(из документации)Чтобы избежать дублирования при использовании в дочерних компонентах, укажите уникальный идентификатор с  hid ключом к метаописанию. Таким образом vue-metaбудет известно, что он должен перезаписать тег по умолчанию.
        {name: 'title', content: 'Portunis'},
        {name: 'description', content: 'Разработка WEB VUE JS REACT PHP YII2'},


      ],
    }
  },
  computed: {
    meta() {
      return this.$data._seo
    }


  },
  mounted() {
    this.loader = true
    setTimeout(() => {
      this.loader = false
    }, 1500);
  }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

.title {
  margin: 10% auto 0;
  max-width: 900px;
  &__h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 100;
    letter-spacing: 5px;
    margin: 20px 0 30px;
    text-align: center;
  }
}
.footer {
  margin: 5% auto 0;
  max-width: 900px;
  &__p {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 100;
    letter-spacing: 5px;
    margin: 20px 0 30px;
    text-align: center;
  }
}
.footer-contact{
  margin: 5% auto 0;
  max-width: 900px;
  &__li{
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 100;
    letter-spacing: 5px;
    margin: 20px 0 30px;
    text-align: center;
    list-style-type: none;
  }
}
</style>
