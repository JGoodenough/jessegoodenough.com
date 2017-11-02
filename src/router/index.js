import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Code from '@/components/Code'
import UltraRunning from '@/components/UltraRunning'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ultra-running',
      name: 'ultra-running',
      component: UltraRunning,
      props: { testLinks: ['test', 'test2'] }
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    }
  ]
})
