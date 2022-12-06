import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import ElementUI from 'element-ui'
import 'element-ui/lib/index.js'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      el: '#app',
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
