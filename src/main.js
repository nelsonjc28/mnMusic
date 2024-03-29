import Vue from 'vue'

import App from './App.vue'
import Practica from './PracticaVuex.vue'


import Spinners from '@/Plugins/Spinners'
import Toast from '@/Plugins/Toast'
import Fontawesome from '@/Plugins/Fontawesome'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import 'vue2-timepicker/dist/VueTimepicker.css'
import eventBus from "@/Plugins/Event-bus";
import MsToMm from "@/Filters/MsToMm";
import Blur from "@/Directives/Blur";
import router from "@/routes";
import store from "@/store";
import i18n from "@/./i18n";

Vue.use(eventBus);

Vue.use(MsToMm);

Vue.use(Blur);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('VueTimepicker', VueTimepicker)


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  i18n,
  component: {
    VueTimepicker
  }

})
