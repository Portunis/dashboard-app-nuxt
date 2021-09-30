<template>
<div>
  <LoaderBeer v-if="loader"/>
  <FirstPage v-if="!loader" />
</div>
</template>

<script>
import LoaderBeer from "~/components/BeerOrDenis/Loader/loader";
import FirstPage from "~/components/BeerOrDenis/FirstPage/FirstPage";
export default {
  name: "index",
  components: {LoaderBeer,FirstPage},
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

<style scoped>

</style>
