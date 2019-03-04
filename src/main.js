// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'
import store from '@/assets/commnt/store'
import commnt from '@/assets/commnt/axios'

Vue.use(Vant)
Vue.use(commnt)
Vue.prototype.axios = axios
Vue.config.productionTip = false
// axios.defaults.baseURL = 'http://localhost:8090';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
