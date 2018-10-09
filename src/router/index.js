import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
      // to is information about the component we're going to
      // from is that component we've come from
      // next is a function determining where we go next.
      
      // First, check params from the "to" component
      console.log(to.params.name)
      if(to.params.name) {
        next()
      } else {
        next({ name: 'Index' })
      }
      }
    }
  ]
})
