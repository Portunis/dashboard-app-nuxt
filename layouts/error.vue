<template>
  <div class="error__all">
  <errorHeader />
    <div v-if="error.statusCode === 404"><Error404 /></div>
    <h1 v-else>An error occurred</h1>
  <error-footer />
  </div>
</template>

<script>
import Error404 from "~/components/error/error404";
import errorHeader from "~/components/error/errorHeader";
import ErrorFooter from "~/components/error/errorFooter";

export default {
  name: "error",
  components: {ErrorFooter, Error404, errorHeader},
  props: ['error'],
  layout: 'error'
}
</script>

<style scoped>
.error__all{
  max-width: 1200px;
  max-height:500px;
  margin: 20px auto;
}
</style>
