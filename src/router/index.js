import Vue from 'vue'
import Router from 'vue-router'
import ShowPicture from 'components/ShowPicture'
import ProductWord from 'components/ProductWord'
import AboutWord from 'components/AboutWord'
import Contact from 'components/Contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowPicture',
      component: ShowPicture
    },
    {
      path: '/product',
      name: 'ProductWord',
      component: ProductWord
    },
    {
      path: '/about',
      name: 'AboutWords',
      component: AboutWord
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
