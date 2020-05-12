import Vue from 'vue'
import Router from 'vue-router'
import SearchComponent from '@/Components/SearchComponent.vue'
import AboutComponent from '@/Components/AboutComponent.vue'
import TrackDetail from '@/Components/TrackDetail.vue'

Vue.use(Router)

const routes = [
  {path: '/', component: SearchComponent, name: 'search'},
  {path: '/about', component: AboutComponent, name: 'about'},
  {path: '/track/:id', component: TrackDetail, name: 'track'},
];


export default new Router({
  mode: "history",
  routes
})
