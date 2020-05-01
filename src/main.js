import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('icon', FontAwesomeIcon)


new Vue({
  el: '#app',
  render: h => h(Home)
})
