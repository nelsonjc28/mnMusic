import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    track:{}
  },
  mutations: {

    setTrack(state,track){
      state.track = track
    }

  },
  getters: {

  },
  actions: {

  }

})

export default store
