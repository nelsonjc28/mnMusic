import Vue from 'vue'

Vue.use(require('vue-moment'));
import 'vue2-timepicker/dist/VueTimepicker.css'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import App from './App.vue'
import Login from './Login.vue'
import Home from './Home.vue'
import Expresiones from './Expresiones.vue'
import Directivas from './Dirrectivas.vue'
import Interpolacion from './Interpolacion.vue'
import Computed from './Computed.vue'
import CalcAge from './CalcAge.vue'
import Watchers from './Watchers.vue'
import Eventos from './Eventos.vue'
import Agenda from './Agenda.vue'
import Task from './Tasck.vue'

import {VueSpinners} from '@saeris/vue-spinners'

Vue.use(VueSpinners)
Vue.use(VueToast, {
  // One of options
  position: 'top-right'
});

import {library} from '@fortawesome/fontawesome-svg-core'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faFire} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faCog} from '@fortawesome/free-solid-svg-icons'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faHome)
library.add(faFire)
library.add(faHeart)
library.add(faCog)
library.add(faPlay)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('VueTimepicker', VueTimepicker)


new Vue({
  el: '#app',
  render: h => h(App),
  component: {
    VueTimepicker
  }

})
