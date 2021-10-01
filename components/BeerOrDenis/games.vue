<template>
  <div>

    <div>
      <div class="container">

        <div class="row">
          <div v-for="item in gamesItems" :key="item.id" class="col-sm-4">
            <NuxtLink :to="item.url" >
              <div class="card text-white card-has-bg click-col"
                   :style="{ backgroundImage: `url(${require('/assets/images/BeerOrDenis/bg-left.png')})` }">

                <div class="card-img-overlay d-flex flex-column">
                  <div class="card-body">
                    <small class="card-meta mb-2">Веселая игра</small>
                    <h4 class="card-title mt-0 ">{{ item.name }}</h4>

                  </div>

                </div>
              </div>
            </NuxtLink>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import LoaderBeer from "~/components/BeerOrDenis/Loader/loader";
import Games from "~/components/BeerOrDenis/games";

export default {
  name: "index",
  components: {Games, LoaderBeer},
  layout: 'default',
  data() {
    return {

      gamesItems: [
        {
          id: 1,
          name: 'Как можно быстрее выпей все пиво и уедь домой!',
          url: '/game',
          img: 'bg-left.png'
        },
        {
          id: 1,
          name: 'Как можно быстрее выпей все пиво и уедь домой!',
          url: '/game/runner',
          img: 'bg-left.png'
        },
        {
          id: 1,
          name: 'Как можно быстрее выпей все пиво и уедь домой!',
          url: '/game/runner',
          img: 'bg-left.png'
        },
        {
          id: 1,
          name: 'Как можно быстрее выпей все пиво и уедь домой!',
          url: '/game/runner',
          img: 'bg-left.png'
        },
        {
          id: 1,
          name: 'Как можно быстрее выпей все пиво и уедь домой!',
          url: '/game/runner',
          img: 'bg-left.png'
        }
      ]
    }
  },


}
</script>

<style lang="scss" scoped>
@import "assets/scss/style";
@import "assets/scss/app";

h1 {
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin: 20px auto;
  text-align: center;
  color: #fff;
}

.container {
  position: relative;
  z-index: 99999999;
}

.card {
  position: relative;
  z-index: 99999999;
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 450px;

  margin: 20px;

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 420px) {
    min-height: 300px;
  }

  &.card-has-bg {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: center center;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      -webkit-filter: grayscale(1);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
    }

    &:hover {
      transform: scale(0.98);
      box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
      background-size: 130%;
      transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

      .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        background: rgb(35, 79, 109);
        background: linear-gradient(0deg, rgba(4, 69, 114, 0.5) 0%, rgba(4, 69, 114, 1) 100%);
      }
    }
  }

  .card-footer {
    background: none;
    border-top: none;

    .media {
      img {
        border: solid 3px rgba(234, 95, 0, 0.3);
      }
    }
  }

  .card-meta {
    color: orange
  }

  .card-body {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    .card-body {
      margin-top: 30px;
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    cursor: pointer;
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .card-img-overlay {
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    background: rgb(35, 79, 109);
    background: linear-gradient(0deg, rgba(35, 79, 109, 0.3785889355742297) 0%, rgba(69, 95, 113, 1) 100%);
  }

}

.card-title {
  color: #fff;
  font-family: 'Roboto', sans-serif;

}
</style>
