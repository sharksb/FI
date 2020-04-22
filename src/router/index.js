import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login'
import toolbar from '@/components/toolbar'
import register from '@/pages/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'toolbar',
      component: toolbar
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
  ]
})
