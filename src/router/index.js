import Vue from 'vue'
import Router from 'vue-router'
// import Main from 'components/Main'
import Show from 'components/Show'
import ShowPicture from 'components/ShowPicture'
import ShowWords from 'components/ShowWords'
import Contact from 'components/Contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Show',
      component: Show
    },
    {
      path: '/product',
      name: 'ShowPicture',
      component: ShowPicture
    },
    {
      path: '/about',
      name: 'ShowWords',
      component: ShowWords
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
