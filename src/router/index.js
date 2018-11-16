import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/user-center/loginPage/login'
import backIndex from '@/components/page/main-menu/backIndex'
import indexContent from '@/components/page/main-menu/indexContent'
import bussiness from '@/components/page/product/bussiness'
import dataNet from '@/components/page/product/dataNet'

import vuelayerTest from '@/components/page/user-center/loginPage/vuelayerTest'
import main from '@/components/page/main-menu/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/vuelayerTest',
      name: 'vuelayerTest',
      component: vuelayerTest
    }
    ,{
      path: '/', //首页框架
      component: backIndex,
      children:[
        { path: '/', //首页统计
          component: indexContent
        },
        { path: 'bussiness', //企业宽带
          component: bussiness
        },

      ]
    },
    { path: '/dataNet', //数据组网
      component: dataNet
    }

  ]
})
