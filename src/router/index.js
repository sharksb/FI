import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import toolbar from '@/components/toolbar'
import register from '@/pages/register'
import resetPassword from '@/pages/resetPassword'
import sendFile from '@/pages/teachers/sendFile'
import fileCharge from '@/pages/teachers/fileCharge'
import reviseWork from '@/pages/teachers/reviseWork'
import releaseTest from '@/pages/teachers/releaseTest'
import testScore from '@/pages/teachers/testScore'
import reviseDetail from '@/pages/teachers/reviseDetail'
import sdfile from '@/components/teachers/radio_selected'

// 学生
import handHomework from '@/pages/students/handHomework'
import handworkDetail from '@/pages/students/handworkDetail'
import homeworkDetail from '@/pages/students/homeworkDetail'
import obtainFile from '@/pages/students/obtainFile'
import classTest from '@/pages/students/classTest'
import currentTestAnswer from '@/pages/students/currentTestAnswer'
import chandhomework from '@/components/students/hand_homework'

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
      path: '/teachers/fileCharge',
      name: 'fileCharge',
      component: fileCharge
    },
    {
      path: '/teachers/reviseWork',
      name: 'reviseWork',
      component: reviseWork
    },
    {
      path: '/teachers/releaseTest',
      name: 'releaseTest',
      component: releaseTest
    },
    {
      path: '/teachers/testScore',
      name: 'testScore',
      component: testScore
    },
    {
      path: '/teachers/reviseDetail',
      name: 'reviseDetail',
      component: reviseDetail
    },
    {
      path: '/teachers/sdfile',
      name: 'sdfile',
      component: sdfile
    },

    {
      path: '/students/handHomework',
      name: 'handHomework',
      component: handHomework
    },
    {
      path: '/students/handworkDetail',
      name: 'handworkDetail',
      component: handworkDetail
    },
    {
      path: '/students/homeworkDetail',
      name: 'homeworkDetail',
      component: homeworkDetail
    },
    {
      path: '/students/obtainFile',
      name: 'obtainFile',
      component: obtainFile
    },
    {
      path: '/students/classTest',
      name: 'classTest',
      component: classTest
    },
    {
      path: '/students/currentTestAnswer',
      name: 'currentTestAnswer',
      component: currentTestAnswer
    },
    {
      path: '/students/chandhomework',
      name: 'chandhomework',
      component: chandhomework
    },
  ]
})
