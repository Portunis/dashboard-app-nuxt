<template>
<div>

  <VueSlickCarousel  ref="carousel"  v-bind="styleSlider" class="body-card-slider animate__animated animate__bounceIn">

  <div class="slider-item">
    <div class="card-content-slider">
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
      <div class="content">
        <div class="card-title-slider">Время</div>

                <div><img class="card-img-slider animate__animated animate__pulse animate__infinite"
                          src="@/assets/images/svg/slider/item/slide-1.svg" alt="cards-manager"/></div>
        <div class="card-text-slider">
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
        </div>
      </div>

    </div>
  </div>
    <div class="slider-item">
      <div class="card-content-slider">
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
        <div class="content">
          <div class="card-title-slider">Идеи</div>


          <div class="card-text-slider">
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
          </div>
          <img class="card-img-slider animate__animated animate__pulse animate__infinite"
                    src="@/assets/images/svg/slider/item/slide-2.svg" alt="cards-manager"/>
        </div>

      </div>
    </div>
    <div class="slider-item">
      <div class="card-content-slider">
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
       <div class="content">
         <div class="card-title-slider">Дела</div>

                 <div><img class="card-img-slider animate__animated animate__pulse animate__infinite"
                           src="@/assets/images/svg/slider/item/slide-3.svg" alt="cards-manager"/></div>
         <div class="card-text-slider">
           texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
         </div>
       </div>

       </div>
    </div>

  </VueSlickCarousel>

</div>
</template>

<script>

export default {
  name: "SliderCard",
  data() {
    return{
      styleSlider: {
        dots: false,
        fade: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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
.card-content-slider{
  position: relative;
  width: auto;
  height: auto;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}
.slider-arrows{
  width: 32px;
  position: absolute;
  top: 11px;
  right: 8px;

  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  z-index: 4;
}
.slider-arrows__left{
  right: 35px;
}
.body-card-slider {
  position: relative;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  background: #7d6aa5;
  margin: 10px;
  opacity: 0.5;
  transition: all .2s ease-in-out;
  z-index: 0;


&:hover {
   transform: scale(1.5);
 }

}



.body-img-slider {
  margin: 0 0 0 20px;
}

.card-img-slider {
  position: absolute;
  top: 20px;
  right: 20px;
 width: 200px;
  height: auto;
  z-index: 1;
}

.card-title-slider {

  font-size: 32px;
  color: #fff;
  font-family: sans-serif;
  text-transform: uppercase;
  margin: 66px 10px 20px 10px;
  z-index: 5;
}

.card-text-slider {

  font-size: 14px;
  color: #fff;
  font-family: sans-serif;
  text-transform: uppercase;
  margin: 25px 20px;
  max-width: 400px;
  word-wrap: break-word;
  max-height: 200px;
  z-index: 2;

}

.button-body-slider {
  position: relative;

  button {
    padding: 10px 10px;
    background: #f9c358;
    border: none;
    border-radius: 5px;
    width: 100px;
    margin: 50px 30px;
    color: #fff;
    font-size: 14px;
    font-family: sans-serif;
    cursor: pointer;


  }


}
</style>
