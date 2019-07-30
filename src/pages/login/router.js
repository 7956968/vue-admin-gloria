import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: '@pages/login/App.vue',
      hidden: true
    },
    {
      path: '/auth-redirect',
      component: () => import('@/pages/login/auth-redirect'),
      hidden: true
    }
  ]
})
