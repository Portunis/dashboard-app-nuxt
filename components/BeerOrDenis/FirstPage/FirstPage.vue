<template>
  <div>

    <div>
      <BackgroundPage/>
    </div>

    <div class="content-denis">

        <NavBar class="animate__animated animate__fadeInLeft" />

      <div class="img-denis animate__animated animate__fadeIn">
        <img src="@/assets/images/BeerOrDenis/bg-left.png" alt=""/>
      </div>
      <div class="left-content animate__animated animate__fadeInRight">
        <p>Я пью пиво каждый день пей и ты!<br>
          Хочешь выпить со мной ?<br>ЖМИ!!!
        </p>
        <Arrows/>
        <Url/>

      </div>

    </div>
    <div class="about"> <AboutDenis /></div>
  </div>
</template>

<script>
import Arrows from "~/components/BeerOrDenis/Loader/arrows";
import Url from "~/components/BeerOrDenis/Loader/url";
import BackgroundPage from "~/components/BeerOrDenis/FirstPage/backgroundPage";
import NavBar from "~/components/BeerOrDenis/FirstPage/navBar";
import AboutDenis from "~/components/BeerOrDenis/about/aboutDenis";

export default {
  name: "index",
  components: {
    AboutDenis,
    NavBar,
    Arrows,
    Url,
    BackgroundPage
  }
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
.about{
  position: relative;
  z-index: 999999;
}
.content-denis {
  position: relative;
  margin: 35px;
  display: flex;
  align-items: center;
  z-index: 999999;
}

.img-denis {
  margin: 0 auto;


  max-width: 700px;

  img {
    max-width: 85%;

  }
}
</style>
