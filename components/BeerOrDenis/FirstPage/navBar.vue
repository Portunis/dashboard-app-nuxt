<template>
  <div>
    <nav class="navbar">
      <ul>Главная</ul>
      <ul>Выпить пиво</ul>
      <ul>Пройти тест</ul>
      <ul>Сорта пива</ul>
      <ul>Биография</ul>
      <NuxtLink to="/games">
        <ul>Игры</ul>
      </NuxtLink>



    </nav>
  </div>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
}
.navbar {
  z-index: 999999;
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  border-right: 1px solid #f9c358;

  ul {
    margin: 10px;
    font-size: 32px;
    font-weight: 800;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #f9c358;
    }
  }
}
</style>
