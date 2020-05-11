import Vue from 'vue'
import Router from 'vue-router'
import SearchComponent from '@/Components/SearchComponent.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {path: '/', component: SearchComponent, name: 'search'}

  ]
})
