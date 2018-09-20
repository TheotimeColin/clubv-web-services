import Vue from 'vue'
import Router from 'vue-router'
import SearchMain from '@/pages/SearchMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchMain',
      component: SearchMain
    }
  ]
})
