import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import menu from '@/components/menu'
import home from '@/components/header'
import sidebar from '@/components/sidebar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      // redirect: '/login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: sidebar
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    }
  ]
})
