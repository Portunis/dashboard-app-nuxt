<template>
<div>
  <HeaderDashboard />
  <div class="content__all">
    <div class="sidebar__all">
      <Sidebar />
    </div>
    <div class="container">

      <div id="content" class="content">
        <Nuxt />
      </div>

    </div>
  </div>


</div>
</template>

<script>
import Sidebar from "~/components/Dashboard/sidebar";
import HeaderDashboard from "~/components/Dashboard/headerDashboard";
export default {
  name: "dashboard",
  components: {HeaderDashboard, Sidebar},
  computed: {}
}
</script>

<style lang="scss" scoped>
@import "assets/scss/dashboard/global";
html{
  overflow-y:  hidden;
}
body{
  background-color: rgb(22, 28, 36) !important;
}
.content__all{
  display: flex;

}

.content{

  width: 100%;
  max-width: 1600px;
  margin: 10px 20px;
 height: 90vh;
  overflow-y: scroll;
  scrollbar-width: none; /* firefox */
  &::-webkit-scrollbar { /* webkit */
    width: 0;
    height: 0;
  }
}
.breadcrumb{
 margin: 10px 20px ;
}
</style>
