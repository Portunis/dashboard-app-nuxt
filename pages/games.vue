<template>
  <div>
    <LoaderBeer v-if="loader"/>
    <div  v-if="!loader">
      <BackgroundPage  />
    </div>
    <div v-if="!loader" class="content-denis">
      <h1>Игры про нашего друга Дениса</h1>
    <Games
       />
      </div>
  </div>
</template>

<script>
import LoaderBeer from "~/components/BeerOrDenis/Loader/loader";
import Games from "~/components/BeerOrDenis/games";
import BackgroundPage from "~/components/BeerOrDenis/FirstPage/backgroundPage";

export default {
  name: "index",
  components: {Games, LoaderBeer,BackgroundPage},
  layout: 'default',
  data() {
    return {
      loader: true,
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
@import "assets/scss/style";
@import "assets/scss/app";

h1{
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin: 20px auto;
  text-align: center;
  color: #fff;
}
.content-denis {
  position: relative;
  margin: 35px;
  align-items: center;
  z-index: 999999;
}
</style>
