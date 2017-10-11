import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import BookIndex from '@/components/BookIndex'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/book"
    },
    {
      path: '/book',
      name: 'BookIndex',
      component: BookIndex
    },
     {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
