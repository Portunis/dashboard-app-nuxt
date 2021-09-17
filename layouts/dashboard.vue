<template>
<div>
  <HeaderDashboard />
  <div class="content__all">
    <div class="sidebar__all">
      <Sidebar />
    </div>
    <div class="container">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/dashboard' }">Главная</el-breadcrumb-item>
          <el-breadcrumb-item>Что то </el-breadcrumb-item>

        </el-breadcrumb>
      </div>
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
html{
  overflow-y:  hidden;
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
