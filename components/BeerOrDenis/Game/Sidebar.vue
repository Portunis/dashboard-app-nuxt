<template>
  <div class="d-flex flex-column h-100 px-4">
    <div class="pb-4">
      <h3>Настройки ⚙️</h3>
      <div class="row pb-1">
        <label for="gridSizeInput" class="col-auto d-flex align-items-center">Размер поля:</label>
        <div class="col">
          <select
            id="gridSizeInput"
            class="form-select"
            v-model="settings.gridSizeSelected"
            @change="changeGridSize()"
          >
            <option v-for="(option, key) in GRID_SIZE_OPTIONS" :value="key">
              {{ key }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <label class="col-auto d-flex align-items-center">Сбросить счет:</label>
        <div class="col">
          <button class="btn btn-danger" type="button" @click="$store.dispatch('RESET_SCORE')">
            Сбросить
          </button>
        </div>
      </div>
    </div>
    <div class="pb-4">
      <h3>Время ⏱</h3>
      <h2>{{ $store.state.timer.timer }}</h2>
    </div>
    <div class="pb-4">
      <h3>Счет 🎯</h3>
      <h2>{{ $store.state.score.score }}</h2>
    </div>
    <div class="pb-4">
      <h3>Управление ⌨</h3>
      <h3>️⬆️<br>⬅️ ⬇️️ ➡️</h3>
    </div>
    <div class="pb-4 mt-auto d-flex justify-content-center">
      <a class="github-link" href="https://github.com/airatakhmetshin/vue-maze" target="_blank" />
    </div>
  </div>
</template>

<script>
import Constants from '@/mixins/constants';

export default {
  name: 'Sidebar',
  mixins: [Constants],
  data() {
    return {
      settings: {
        gridSizeSelected: '11x11',
      },
    };
  },
  methods: {
    changeGridSize() {
      this.$emit('changeGridSize', this.settings.gridSizeSelected);
    },
  },
  mounted() {
    this.changeGridSize();
  },
};
</script>

<style lang="scss" scoped>
.github-link {
  display: flex;
  width: 25px;
  height: 25px;
  background-image: url("/assets/images/BeerOrDenis/game/github.svg");
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}
</style>
