<template>
<div>
  <HeaderDashboard />
  <div class="content__all">
    <div class="sidebar__all">
      <Sidebar />
    </div>
    <div class="container">

      <div id="content" class="content">
        <div v-if="loader" class="loader-anim">
           <LoaderPage class="loader" />
        </div>
        <Nuxt v-if="!loader" />
      </div>

    </div>
  </div>


</div>
</template>

<script>
import Sidebar from "~/components/Dashboard/sidebar";
import HeaderDashboard from "~/components/Dashboard/headerDashboard";
import LoaderPage from "~/components/loader/loaderPage";
export default {
  name: "dashboard",
  components: {LoaderPage, HeaderDashboard, Sidebar},
  computed: {},
  data () {
    return {
    loader: true,

    }
  },

  mounted() {
    setTimeout(() => {
      this.loader = false
    }, 1500);
  }
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
  position: relative;
  width: 100%;
  max-width: 1590px;
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
