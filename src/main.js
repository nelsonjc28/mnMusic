import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faCog} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faPopcorn} from '@fortawesome/vue-fontawesome'

library.add(faHome)
library.add(faFire)
library.add(faHeart)
library.add(faCog)
// library.add(faPopcorn)

Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  el: '#app',
  render: h => h(Home)
})
