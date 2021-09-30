<template>
<div>
  <div class="text">
   <h1>О Денисе</h1>
    <p>Любитель выпить пива и уехать домой</p>
  </div>
</div>
</template>

<script>
export default {
  name: "aboutDenis"
}
</script>

<style lang="scss" scoped>
@import "assets/scss/style";
p {
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  color: #fff;

}
h1{
  font-size: 54px;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  color: #fff;
  margin: 0 auto;
  text-align: center;

}
.text{

  z-index: 999999;
  max-width: 900px;
  margin: 100px;
}
</style>
