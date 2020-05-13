import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {

    incrementar(state) {
      state.count += 1
    },
    disminuir(state) {
      state.count -= 1
    }
  }

})

export default store
