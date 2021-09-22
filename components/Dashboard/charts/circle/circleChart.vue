<template>
<div>
  <div class="body-card-slider animate__animated animate__bounceIn">
    <button class="slider-arrows slider-arrows__left" @click="showPrev">
      <img src="@/assets/images/svg/slider/arrow-left.svg"
           alt="arrow-left"
      />
    </button>
    <button class="slider-arrows slider-arrows__right" @click="showNext">
      <img src="@/assets/images/svg/slider/arrow-right.svg"
           alt="arrow-right"
      />
    </button>
    <VueSlickCarousel  ref="carousel"  v-bind="styleSlider" >

      <div class="slider-item">
        <div class="card-content-slider">

          <div class="content">
            <el-progress class="circle-item" type="circle" :percentage="0"></el-progress>
            <div class="circle-title">
              <p>
               Профиль заполен
              </p>
            </div>


          </div>

        </div>
      </div>
      <div class="slider-item">
        <div class="card-content-slider">

          <div class="content">
            <el-progress class="circle-item" type="circle" :percentage="25"></el-progress>
            <div class="circle-title">
              <p>
                Обработано заявок
              </p>
            </div>
          </div>

        </div>
      </div>
      <div class="slider-item">
        <div class="card-content-slider">

          <div class="content">
            <el-progress class="circle-item" type="circle" :percentage="100" status="success"></el-progress>
            <div class="circle-title">
              <p>
                Какая нить хрень
              </p>
            </div>
          </div>

        </div>
      </div>

    </VueSlickCarousel>
  </div>

</div>
</template>

<script>

export default {
  name: "SliderCard",
  data() {
    return{
      styleSlider: {
        dots: false,
        fade: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
      }
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },

}
</script>

<style lang="scss" scoped>
@import "assets/scss/slider/card-slider";
.circle-item{
  margin: 30px auto 0;
}
.el-progress__text {
  font-size: 14px;
  color: #ffffff !important;
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  line-height: 1;
}
.circle-title{
  margin: 32px auto;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
}
</style>
