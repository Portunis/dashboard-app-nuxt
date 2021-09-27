<template>
<div>
  <div>
    <div v-if="loader" class="loader-anim">
      <LoaderPage class="loader" />
    </div>
  </div>
  <div v-if="step === 1 && !loader && !stepFinish">
    <transition name="fade" mode="out-in">
     <StepStartFirst  @nextpage="stepNext" />
     </transition>

  </div>
  <div v-if="step === 2 && !loader && !stepFinish">
    <transition name="fade" mode="out-in">
    <StepStartSecond  @nextpage="stepNext" />
    </transition>
  </div>
  <div v-if="step === 3 && !loader && !stepFinish">
    <transition name="fade" mode="out-in">
    <StepStartThird  @nextpage="endPage" />
    </transition>
  </div>
<div v-if="stepFinish">
  <HeaderDashboard />
  <div class="content__all">
    <div class="sidebar__all">
      <Sidebar />
    </div>
    <div class="container">

      <div id="content" class="content">

        <Nuxt v-if="!loader" />
      </div>

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
      stepFinish: false,
      step: 1,

    }
  },
  methods: {
    stepNext(){
   this.step++;

    },
    endPage(){
      this.stepFinish = true;
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
