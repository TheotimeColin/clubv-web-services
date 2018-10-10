import Vue from 'vue'
import Router from 'vue-router'

import SearchMain from '@/pages/SearchMain'
import RecordDetails from '@/pages/RecordDetails'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/records',
      component: SearchMain,
      meta: {
        headerModifiers: []
      }
    },
    {
      path: '/records/:id',
      component: RecordDetails,
      meta: {
        transitionName: 'slideUp',
        headerModifiers: [ 'mini' ]
      }
    },
    {
      path: '/',
      component: Login,
      meta: {
        headerModifiers: [ 'hidden' ]
      }
    }
  ]
})
