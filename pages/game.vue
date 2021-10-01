<template>
  <div>
    <LoaderBeer v-if="loader"/>
    <div class="game-body"  v-if="!loader">
      <h1>Играй за Дениса, собирай банки и зарабатывай очки!</h1>
      <no-ssr >

        <MazeGrid class="game" />
      </no-ssr>

      <NuxtLink to="/games" class="btn btn-danger">Вернутся назад</NuxtLink>
    </div>


  </div>


</template>

<script>
import LoaderBeer from "~/components/BeerOrDenis/Loader/loader";

import MazeGrid from "~/components/BeerOrDenis/Game/MazeGrid";
export default {
  name: 'App',
  components: {MazeGrid,LoaderBeer},
  data() {
    return {
      loader: true,
    }
  },
  mounted() {
    this.$store.dispatch('RESTORE_SCORE');
    this.loader = true;
    setTimeout(() => {
      this.loader = false
    }, 1500);
  },
};
</script>

<style lang="scss">
@import "assets/scss/app";
.game-body{
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  h1{
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    margin: 20px auto;
    text-align: center;
  }
}
.game{

}
</style>
