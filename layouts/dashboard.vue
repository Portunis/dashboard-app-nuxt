<template>
  <div>
    <div>
      <div v-if="loader" class="loader-anim">
        <LoaderPage class="loader"/>
      </div>
    </div>
    <div v-if="step === 1 && !loader && !stepFinish">
      <transition name="fade" mode="out-in">
        <StepStartFirst @nextpage="stepNext"/>
      </transition>

    </div>
    <div v-if="step === 2 && !loader && !stepFinish">
      <transition name="fade" mode="out-in">
        <StepStartSecond @nextpage="stepNext"/>
      </transition>
    </div>
    <div v-if="step === 3 && !loader && !stepFinish">
      <transition name="fade" mode="out-in">
        <StepStartThird @nextpage="endPage"/>
      </transition>
    </div>
    <div v-if="stepFinish">
      <HeaderDashboard/>
      <div class="content__all">
        <div class="sidebar__all">
          <Sidebar/>
        </div>
        <div class="container">

          <div id="content" class="content">

            <Nuxt v-if="!loader"/>
          </div>

        </div>
      </div>


    </div>
    <div v-if="stepFinish" class="helper" @click="helperOn" >
      <transition name="fade">
      <Helper />
      </transition>
    </div>
    <transition name="fade">
    <div class="helper_body" v-if="helperOnBody">

      <helperBody class="notificate"  @nexthelp="endHelp"/>

    </div>
    </transition>
  </div>
</template>

<script>
import Sidebar from "~/components/Dashboard/sidebar";
import HeaderDashboard from "~/components/Dashboard/headerDashboard";
import LoaderPage from "~/components/loader/loaderPage";
import Helper from "~/components/helper/helper";

export default {
  name: "dashboard",
  components: {Helper, LoaderPage, HeaderDashboard, Sidebar},
  computed: {},
  data() {
    return {
      loader: true,
      stepFinish: false,
      step: 1,
      helperOnBody: false

    }
  },
  methods: {
    helperOn(){
      this.helperOnBody = true;
    },
    endHelp(){
      this.helperOnBody = false;
    },
    stepNext() {
      this.step++;

    },
    endPage() {
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
html {
  overflow-y: hidden;
}

body {
  background-color: rgb(22, 28, 36) !important;
}

.helper {
  position: absolute;
  bottom: 10px;
  right: 20px;
  cursor: pointer;
}

.content__all {
  display: flex;

}

.content {
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

.breadcrumb {
  margin: 10px 20px;
}
</style>
