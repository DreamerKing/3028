import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  beforeCreate: function () {
    this.$http.get('data/test.json')
      .then(res => {
        console.log(res.body)
      }, res => {
        console.log(res)
      })
  }
})
