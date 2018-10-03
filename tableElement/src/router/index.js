import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tableElem from '@/components/table'
import choose from '@/components/choose'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'tableElem',
      component: tableElem

    },
    {
      path: '/choose',
      name: 'choose',
      component: choose
    }
  ]
})
