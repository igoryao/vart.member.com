import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    }
  ]
})
