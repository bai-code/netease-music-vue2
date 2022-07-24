import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/element-ui/index.js'
import '@/utils/normalize.css'
import axios from '@/axios/index.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
