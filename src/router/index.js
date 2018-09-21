import Vue from 'vue'
import Router from 'vue-router'

import SearchMain from '@/pages/SearchMain'
import RecordDetails from '@/pages/RecordDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/records', component: SearchMain, meta: { transitionName: 'slideUp' } },
    { path: '/records/:id', component: RecordDetails, meta: { transitionName: 'slideUp' }  }
  ]
})
