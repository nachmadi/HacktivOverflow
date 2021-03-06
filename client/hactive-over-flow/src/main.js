// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import './assets/css/login.css'
// import './assets/font-awesome/css/font-awesome.min.css'
import FBSignInButton from 'vue-facebook-signin-button'


// import axios from 'axios'
Vue.config.productionTip = false
Vue.use(FBSignInButton)
// const http = axios.create({
//   baseURL: 'http://localhost:3000'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  FBSignInButton,
  template: '<App/>',
  components: { App }
})
