
import pause from '@/store/modules/pause';
import score from '@/store/modules/score';
import timer from '@/store/modules/timer';




export const state = () => ({
    isPlayerAlive: false,
  });
  export const  getters = {
    isPlayerDead(state) {
      return !state.isPlayerAlive;
    },
  };
export const mutations ={
    SET_PLAYER_ALIVE(state, alive) {
      state.isPlayerAlive = alive;
    },
  };

  export const  modules = {
    pause,
    score,
    timer,
  };

