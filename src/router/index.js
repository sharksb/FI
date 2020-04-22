import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login'
import toolbar from '@/components/toolbar'
import register from '@/pages/register'
import resetPassword from '@/pages/resetPassword'
import sendFile from '@/pages/teachers/sendFile'
import sdfile from '@/components/teachers/sd-file'

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
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: resetPassword
    },
    {
      path: '/teachers/sendFile',
      name: 'sendFile',
      component: sendFile
    },
    {
      path: '/teachers/sdfile',
      name: 'sdfile',
      component: sdfile
    },
  ]
})
