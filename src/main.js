import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Expresiones from './Expresiones.vue'
import Directivas from './Dirrectivas.vue'
import Interpolacion from './Interpolacion.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faCog} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome)
library.add(faFire)
library.add(faHeart)
library.add(faCog)

Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  el: '#app',
  render: h => h(Interpolacion)
})
