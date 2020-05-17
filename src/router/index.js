import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import register from '@/pages/register'

import index from '@/pages/index'
import person from '@/pages/person/person'

import sfeature from '@/pages/students/feature'
import tfeature from '@/pages/teachers/feature'

import platform from '@/pages/platform/platform'
import platformDetail from '@/pages/platform/platformDetail'
import informationDetail from '@/pages/platform/informationDetail'

import resetPassword from '@/pages/resetPassword'
import sendFile from '@/pages/teachers/sendFile'
import fileCharge from '@/pages/teachers/fileCharge'
import reviseWork from '@/pages/teachers/reviseWork'
import releaseTest from '@/pages/teachers/releaseTest'
import testScore from '@/pages/teachers/testScore'
import reviseDetail from '@/pages/teachers/reviseDetail'
import tclassTestDetail from '@/pages/teachers/tclassTestDetail'
import testStasticDetail from '@/pages/teachers/testStasticDetail'
import mangement from '@/pages/teachers/mangement'
import sdfile from '@/components/teachers/internet_info'


// 学生
import handHomework from '@/pages/students/handHomework'
import handworkDetail from '@/pages/students/handworkDetail'
import homeworkDetail from '@/pages/students/homeworkDetail'
import obtainFile from '@/pages/students/obtainFile'
import classTest from '@/pages/students/classTest'
import currentTest from '@/pages/students/currentTest'
import currentTestAnswer from '@/pages/students/currentTestAnswer'
import passedTest from '@/pages/students/passedTest'
import passedTestAnswer from '@/pages/students/passedTestAnswer'
import chandhomework from '@/components/students/hand_homework'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/personCneter',
      name: 'person',
      component: person
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

    //  学生功能界面
    {
      path: '/sfeature',
      name: 'sfeature',
      component: sfeature
    },
    {
      path: '/tfeature',
      name: 'tfeature',
      component: tfeature
    },

    // 论坛
    {
      path: '/platform',
      name: 'platform',
      component: platform
    },
    {
      path: '/platformDetail',
      name: 'platformDetail',
      component: platformDetail
    },
    {
      path: '/informationDetail',
      name: 'informationDetail',
      component: informationDetail
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
      path: '/teachers/tclassTestDetail',
      name: 'tclassTestDetail',
      component: tclassTestDetail
    },
    {
      path: '/teachers/testStasticDetail',
      name: 'testStasticDetail',
      component: testStasticDetail
    },
    {
      path: '/teachers/mangement',
      name: 'mangement',
      component: mangement
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
      path: '/students/currentTest',
      name: 'currentTest',
      component: currentTest
    },
    {
      path: '/students/currentTestAnswer',
      name: 'currentTestAnswer',
      component: currentTestAnswer
    },
    {
      path: '/students/passedTest',
      name: 'passedTest',
      component: passedTest
    },
    {
      path: '/students/passedTestAnswer',
      name: 'passedTestAnswer',
      component: passedTestAnswer
    },
    {
      path: '/students/chandhomework',
      name: 'chandhomework',
      component: chandhomework
    },

  ]
})
