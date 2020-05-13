import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {

    incrementar(state, payload = {}) {
      state.count += payload.number ? payload.number : 1
    },
    disminuir(state) {
      state.count -= 1
    }
  },
  getters: {
    getDouble(state, getters) {
      return state.count * 2
    }
  },
  actions: {
    incrementAsync(context, payload) {

      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          context.commit('incrementar', payload)
          resolve()
        }, 3000)
      })


    }
  }

})

export default store
