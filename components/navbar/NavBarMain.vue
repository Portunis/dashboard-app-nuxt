<template>
<div>
  <div>
   <div class="container flexnav">
     <nav class="nav_menu">
       <ul>
         Субстанции
       </ul>
       <ul>
         Готовая продукция
       </ul>
       <ul>
         О нас
       </ul>
     </nav>
     <div>
        <img  />
     </div>
     <nav class="nav_menu">
       <ul>
         Сотрудничество
       </ul>
       <ul>
         Контакты
       </ul>

     </nav>
   </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NavBarMain"
}
</script>

<style scoped>
.nav_menu{
  display: flex;
}
.flexnav{
  display: flex;
  justify-content: space-around;
}
</style>
