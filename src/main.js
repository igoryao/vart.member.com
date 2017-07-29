// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/scss/index.scss'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'

import Vue from 'vue'

import VueResource from 'vue-resource'

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App,
  // template: '<App/>',
  // components: { App }
})
